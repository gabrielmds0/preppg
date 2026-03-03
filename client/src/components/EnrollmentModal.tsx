import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Mail, Phone, Lock, Send, Stethoscope } from "lucide-react";

interface EnrollmentModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const crmOptions = [
    { value: "A", label: "CRM Ativo há mais de 3 anos" },
    { value: "B", label: "CRM Ativo há menos de 3 anos" },
    { value: "C", label: "Revalidando" },
    { value: "D", label: "Interno" },
    { value: "E", label: "Estudante de Medicina Ciclo Clínico" },
    { value: "F", label: "Estudante de Medicina Ciclo Básico" },
    { value: "G", label: "Não sou médico(a)" },
];

const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'] as const;

export function EnrollmentModal({ isOpen, onOpenChange }: EnrollmentModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        crm_tag: "",
        crm_option: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const urlParams = new URLSearchParams(window.location.search);
            const sessionId = sessionStorage.getItem('session_id') || crypto.randomUUID();

            sessionStorage.setItem('session_id', sessionId);

            const trackingData = trackingKeys.reduce<Record<string, string>>((acc, key) => {
                acc[key] = sessionStorage.getItem(key) || urlParams.get(key) || "";
                return acc;
            }, {
                session_id: sessionId
            });

            // Send data to Webhook
            await fetch("https://projetolm-n8n.8x0hqh.easypanel.host/webhook/3848f193-6b80-4b4c-a1c6-d966a68d7ac5", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    ...trackingData,
                    source: "landing_page_preppg",
                    date: new Date().toISOString()
                }),
            });

            // Redirect to Checkout with UTMs and User Data
            const checkoutUrl = new URL("https://clkdmg.site/pay/preespecializacao");

            // Helper to append params if they exist
            const appendParam = (key: string, value: string | null | undefined) => {
                if (value) checkoutUrl.searchParams.append(key, value);
            };

            // 1. Add Form Data
            appendParam("name", formData.name);
            appendParam("email", formData.email);
            appendParam("phone", formData.phone);

            // 2. Add UTMs/Session captured from sessionStorage or current URL
            Object.entries(trackingData).forEach(([key, value]) => {
                appendParam(key, value);
            });

            window.location.href = checkoutUrl.toString();

        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            // Even if webhook fails, we might want to redirect or show error.
            // Ideally redirect anyway to not lose the sale.
            window.location.href = "https://clkdmg.site/pay/preespecializacao";
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] md:max-w-[500px] w-[95vw] max-h-[90vh] overflow-y-auto bg-[#0A0A0C] border-white/10 text-slate-100 p-0 gap-0 rounded-xl">

                {/* Header - Matching the red style from reference but darker/premium */}
                <div className="bg-gradient-to-r from-red-900 to-[#E53935]/80 p-6 md:p-8 text-center relative sticky top-0 z-10">
                    <DialogHeader>
                        <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                            Quero estar preparado!
                        </DialogTitle>
                        <DialogDescription className="text-white/90 text-center text-sm md:text-base font-medium">
                            Receba acesso exclusivo a Formação Paciente Grave
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-slate-300">Nome completo *</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
                                <Input
                                    id="name"
                                    required
                                    placeholder="Dr. João Silva"
                                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-[#E53935]"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300">Email profissional *</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="joao@exemplo.com"
                                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-[#E53935]"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-slate-300">Telefone celular *</Label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-slate-500" />
                                <Input
                                    id="phone"
                                    type="tel"
                                    required
                                    placeholder="(11) 99999-9999"
                                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-[#E53935]"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-slate-300 flex items-center gap-2">
                                <Stethoscope className="w-4 h-4 text-[#E53935]" />
                                Qual a situação do seu CRM hoje? *
                            </Label>
                            <RadioGroup
                                required
                                value={formData.crm_tag}
                                onValueChange={(val) => {
                                    const selected = crmOptions.find(o => o.value === val);
                                    setFormData({ ...formData, crm_tag: val, crm_option: selected?.label ?? "" });
                                }}
                                className="grid grid-cols-1 gap-3"
                            >
                                {crmOptions.map((opt) => (
                                    <div key={opt.value} className="flex items-center space-x-2 rounded-lg border border-white/10 p-3 hover:bg-white/5 cursor-pointer transition-colors has-[:checked]:border-[#E53935] has-[:checked]:bg-[#E53935]/10">
                                        <RadioGroupItem value={opt.value} id={opt.value} className="border-white/20 text-[#E53935]" />
                                        <Label htmlFor={opt.value} className="flex-1 cursor-pointer text-slate-300 font-normal">{opt.label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#E53935] hover:bg-red-600 text-white font-bold h-12 text-base rounded-lg shadow-lg shadow-red-900/20"
                    >
                        {isLoading ? "Enviando..." : (
                            <span className="flex items-center gap-2">
                                <Send className="w-4 h-4" /> Quero ter acesso exclusivo
                            </span>
                        )}
                    </Button>

                    <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                        <Lock className="w-3 h-3" />
                        Seus dados estão seguros e não serão compartilhados
                    </p>

                </form>
            </DialogContent>
        </Dialog>
    );
}
