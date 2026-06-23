import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Layout from '@/components/Layout';
import { AlertTriangle, Droplets, Wind } from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Overlay Content */}
      <section 
        className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center justify-start bg-scroll md:bg-fixed"
        style={{
          backgroundImage: 'url(/images/hero-modern-ac-environment.webp)',
        }}
      >
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10 md:from-black/40 md:via-black/20 md:to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            為什麼空調出風口會結露？
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8 leading-relaxed">
            台灣年平均相對濕度接近 80%，當空調出風口表面溫度低於室內空氣露點溫度時，結露必然發生。而結露後的冷凝水膜，正是黴菌滋生的溫床。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/root-cause">
              <Button size="lg" className="bg-accent hover:bg-orange-600 text-white">
                了解根本原因
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                聯絡諮詢
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              台灣居家空調面臨的挑戰
            </h2>
            <p className="text-lg text-gray-600">
              高濕度環境下，空調出風口結露與黴菌生長是常見困擾
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-secondary/30 hover:border-secondary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="w-8 h-8 text-secondary" />
                  <CardTitle>極端潮濕氣候</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  年平均相對濕度接近 <strong>80%</strong>，夏季與梅雨季節常飆破 <strong>90%</strong>。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/30 hover:border-accent transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                  <CardTitle>結露風險高</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  出風口表面溫度與室內露點溫度相差 <strong>3℃～5℃</strong>，極易引發結露。
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="w-8 h-8 text-primary" />
                  <CardTitle>發霉成常態</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  冷凝水膜形成後，黴菌孢子接觸即萌發。傳統防霉方式難以根除。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Data Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            核心數據
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
              <CardHeader>
                <CardTitle className="text-secondary">年平均濕度</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-secondary mb-2">80%</div>
                <p className="text-gray-700 text-base sm:text-lg">台灣年平均相對濕度</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <CardHeader>
                <CardTitle className="text-accent">露點溫度範圍</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-accent mb-2">17℃～21℃</div>
                <p className="text-gray-700 text-base sm:text-lg">典型環境露點溫度範圍</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">結露臨界差</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">3℃～5℃</div>
                <p className="text-gray-700 text-base sm:text-lg">結露發生的溫度臨界差</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            科學防制方案
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            階層式防護策略：從操作調整到主動淨化的完整防護
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">操作調整</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                加大風量、適度提高設定溫度、優化運轉模式
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">輔助設備</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                獨立除濕機、全熱交換器等硬體升級
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">主動淨化</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                PICT® 光離子催化技術，表面脫水與滅活雙管齊下
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/solutions">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                查看完整防制方案
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dew Point Heatmap Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            露點溫度對照表
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            快速判斷您的環境風險等級
          </p>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-4 sm:p-8 mb-8">
            <img 
              src="/images/環境溫溼度與露點關係圖.jpg"
              alt="環境溫溼度與露點關係圖" 
              className="w-full h-auto rounded-lg"
            />
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            每個空間都是獨特的
          </h2>
          <p className="text-lg text-white/90 mb-8">
            您的空調配置、氣流特性、實測溫濕度都不同。我們提供個人化的環境檢測與優化方案。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-orange-600 text-white">
              預約免費環境評估
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
