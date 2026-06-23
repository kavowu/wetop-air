import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import { Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';
import { EMAILJS_CONFIG } from '@/lib/emailjs.config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acType: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAcTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, acType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.acType || !formData.description) {
      toast.error('請填寫所有必填欄位');
      return;
    }

    setIsSubmitting(true);

    const acTypeLabel: Record<string, string> = {
      'wall-mounted': '壁掛式',
      'ceiling-hidden': '吊隱式',
      'central': '中央空調',
      'other': '其他',
    };

    const templateParams = {
      to_email: 'kavowu@wetoptec.com.tw',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      ac_type: acTypeLabel[formData.acType] || formData.acType,
      description: formData.description,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast.success('表單已成功送出！我們將在 24 小時內與您聯絡。');
      setFormData({ name: '', email: '', phone: '', acType: '', description: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('送出失敗，請稍後再試或直接來電聯絡我們。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">聯絡諮詢</h1>
          <p className="text-lg text-white/90">預約免費環境評估，我們將在 24 小時內與您聯絡</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* LINE QR Code */}
            <Card className="lg:col-span-5 xl:col-span-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-green-500 border-x border-b border-gray-100 flex flex-col justify-between bg-white">
              <CardHeader className="pb-2 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-green-50 text-green-600 rounded-2xl mb-2 mx-auto">
                  <MessageCircle className="w-7 h-7 fill-green-600/10" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">LINE 官方帳號</CardTitle>
                <p className="text-gray-500 text-sm mt-1">即時諮詢與線上預約</p>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4 pt-2 pb-6 flex-1 justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur-md opacity-20 group-hover:opacity-35 transition duration-300"></div>
                  <img
                    src="/images/lineqrcode.png"
                    alt="LINE QR Code @wetop"
                    className="relative w-40 h-40 rounded-xl border border-gray-100 bg-white p-2 shadow-sm"
                  />
                </div>
                <div className="text-center space-y-1 mt-1">
                  <p className="text-green-600 font-extrabold text-2xl tracking-wider">@wetop</p>
                  <p className="text-gray-500 text-xs sm:text-sm">請掃描上方 QR Code 加入好友</p>
                </div>
              </CardContent>
            </Card>

            {/* Other Contacts Stack */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5 justify-between">
              {/* Phone */}
              <Card className="hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-sky-500 border-y border-r border-gray-100 flex items-center p-6 gap-6 bg-white flex-1">
                <div className="p-4 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">電話專線</span>
                  <a
                    href="tel:03-6685878"
                    className="text-2xl font-extrabold text-gray-900 hover:text-primary transition-colors block"
                  >
                    03-6685878
                  </a>
                </div>
              </Card>

              {/* Address */}
              <Card className="hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-orange-500 border-y border-r border-gray-100 flex items-center p-6 gap-6 bg-white flex-1">
                <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">服務據點</span>
                  <p className="text-xl font-bold text-gray-800 leading-normal">
                    新竹縣竹北市文興路一段 360 號
                  </p>
                </div>
              </Card>

              {/* Hours */}
              <Card className="hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-indigo-500 border-y border-r border-gray-100 flex items-center p-6 gap-6 bg-white flex-1">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">營業時間</span>
                  <p className="text-xl font-bold text-gray-800">
                    週一至週五 <span className="text-indigo-600 font-extrabold ml-1.5">10:00 - 18:00</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                環境檢測表單
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-green-50 rounded-xl border-2 border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">表單已送出！</h3>
                  <p className="text-gray-600 mb-6">感謝您的諮詢，我們將在 24 小時內與您聯絡。</p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    再次填寫
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">姓名 *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="請輸入您的姓名"
                      className="mt-2 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base">電子郵件 *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="請輸入您的電子郵件"
                      className="mt-2 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base">電話 *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="請輸入您的電話號碼"
                      className="mt-2 text-base"
                    />
                  </div>

                  <div>
                    <Label htmlFor="acType" className="text-base">空調型式 *</Label>
                    <Select value={formData.acType} onValueChange={handleAcTypeChange}>
                      <SelectTrigger id="acType" className="mt-2 text-base">
                        <SelectValue placeholder="請選擇空調型式" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wall-mounted">壁掛式</SelectItem>
                        <SelectItem value="ceiling-hidden">吊隱式</SelectItem>
                        <SelectItem value="central">中央空調</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-base">詳細描述 *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="請描述您的空調結露和發霉情況"
                      className="mt-2 min-h-32 text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-orange-600 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '送出中...' : '提交表單'}
                  </Button>
                </form>
              )}
            </div>

            {/* Service Description */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                個人化環境檢測服務
              </h2>

              <Card className="mb-6 border-2 border-primary/30">
                <CardHeader>
                  <CardTitle>我們需要的信息</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>空調型式：</strong>壁掛式、吊隱式或中央空調</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>參數設定：</strong>設定溫度、風速等級</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>實測溫濕度：</strong>室內溫度和相對濕度</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>出風口照片：</strong>結露和發霉的實際情況</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span><strong>結露位置與頻率：</strong>何時何地發生結露</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30">
                <CardHeader>
                  <CardTitle>評估流程</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-gray-700 text-base sm:text-lg">
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">1</span>
                      <span>提交表單和相關信息</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">2</span>
                      <span>我們進行詳細分析</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">3</span>
                      <span>24 小時內與您聯絡</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">4</span>
                      <span>提供個性化防制方案</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-secondary font-bold">5</span>
                      <span>持續跟進和技術支持</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
