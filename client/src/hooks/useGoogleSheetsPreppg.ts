import { useEffect, useState } from "react";

const SPREADSHEET_ID = "1MCmHqHMDHV4RT1EFL8LLaLeqnpKCWGVvwiCmBA9WVhs";
const SHEET_GID = "688339807";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

const TARGET_PRODUTO = "PREPPG";

type SheetData = {
  Data: string;
  Local?: string;
  Checkout?: string;
  Lote?: number;
};

const FALLBACK_DATA: SheetData = {
  Data: "24/02 - 20h",
  Local: "",
  Checkout: "",
  Lote: 1
};

function normalizeHeader(value: string) {
  return value.replace(/^\uFEFF/, "").trim().toLowerCase();
}

function parseCSVToArray(csvText: string) {
  const rows: string[][] = [];
  const lines = csvText.split(/\r?\n/);

  for (const line of lines) {
    if (!line.trim()) continue;

    const cells: string[] = [];
    let currentCell = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === "\"") {
        insideQuotes = !insideQuotes;
      } else if (char === "," && !insideQuotes) {
        cells.push(currentCell.trim());
        currentCell = "";
      } else {
        currentCell += char;
      }
    }
    cells.push(currentCell.trim());

    rows.push(cells);
  }

  return rows;
}

export function useGoogleSheetsPreppg() {
  const [data, setData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();

        if (!csvText) {
          if (isActive) {
            setData(FALLBACK_DATA);
            setLoading(false);
          }
          return;
        }

        const rows = parseCSVToArray(csvText);

        if (rows.length === 0) {
          if (isActive) {
            setData(FALLBACK_DATA);
            setLoading(false);
          }
          return;
        }

        const header = rows[0]?.map(normalizeHeader) ?? [];
        const produtoIndex = header.indexOf("produto");
        const dataIndex = header.indexOf("data");
        const localIndex = header.indexOf("local");
        const checkoutIndex = header.indexOf("checkout");
        const loteIndex = header.indexOf("lote");

        let targetRow: string[] | undefined;

        if (produtoIndex >= 0) {
          targetRow = rows.slice(1).find((row) => {
            const cell = row[produtoIndex] ?? "";
            return cell.trim().toUpperCase() === TARGET_PRODUTO;
          });
        }

        if (!targetRow) {
          targetRow = rows.slice(1).find((row) =>
            row.some((cell) => (cell ?? "").trim().toUpperCase() === TARGET_PRODUTO)
          );
        }

        if (!targetRow) {
          if (isActive) {
            setData(FALLBACK_DATA);
            setLoading(false);
          }
          return;
        }

        const resolvedDataIndex = dataIndex >= 0 ? dataIndex : 1;
        const resolvedLocalIndex = localIndex >= 0 ? localIndex : 2;
        const resolvedCheckoutIndex = checkoutIndex >= 0 ? checkoutIndex : 3;

        const loteValue = loteIndex >= 0 ? parseInt(targetRow[loteIndex] ?? "", 10) : NaN;
        const lote = Number.isNaN(loteValue) ? FALLBACK_DATA.Lote : loteValue;

        const nextData: SheetData = {
          Data: targetRow[resolvedDataIndex] || FALLBACK_DATA.Data,
          Local: targetRow[resolvedLocalIndex] || FALLBACK_DATA.Local,
          Checkout: targetRow[resolvedCheckoutIndex] || FALLBACK_DATA.Checkout,
          Lote: lote
        };

        if (isActive) {
          setData(nextData);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching CSV:", err);
        if (isActive) {
          setError("Failed to fetch data");
          setData(FALLBACK_DATA);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isActive = false;
    };
  }, []);

  return { data, loading, error };
}

export default useGoogleSheetsPreppg;
