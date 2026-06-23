import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { AlertTriangle, AlertCircle } from 'lucide-react';

export default function RootCause() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            根本原因分析
          </h1>
          <p className="text-lg text-white/90">
            台灣居家空調出風口結露與環境發霉的根本原因及防制之道
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Core Principle */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            冷凍空調工程學鐵律
          </h2>
          <Alert className="border-2 border-accent bg-accent/5 mb-8">
            <AlertTriangle className="h-6 w-6 text-accent" />
            <AlertTitle className="text-lg text-accent font-bold">警示框</AlertTitle>
            <AlertDescription className="text-base text-gray-800 mt-2">
              出風口表面溫度，必須永遠高於室內空氣的露點溫度。
            </AlertDescription>
          </Alert>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            這是冷凍空調工程的基本原理。當出風口表面溫度低於露點溫度時，空氣中的水蒸氣會在表面凝結成液態水，形成冷凝水膜。這個過程是物理必然，無法避免。
          </p>
        </section>

        {/* Dew Point Explanation */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            露點溫度說明
          </h2>
          
          <Card className="mb-6 border-2 border-primary/30">
            <CardHeader>
              <CardTitle>台灣室內環境特性</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-700">
                <p><strong>相對濕度：</strong> 65%～75%</p>
                <p><strong>露點溫度：</strong> 17℃～21℃</p>
                <p><strong>典型送風溫度：</strong> 13℃～16℃</p>
                <p><strong>溫差：</strong> 3℃～5℃</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            露點溫度是指空氣中的水蒸氣開始凝結成液態水的溫度。在台灣高濕度環境中，室內相對濕度通常在 65%～75% 之間，對應的露點溫度為 17℃～21℃。而空調出風口的送風溫度通常設定在 13℃～16℃，這意味著出風口表面溫度往往低於露點溫度 3℃～5℃，結露就此發生。
          </p>
        </section>

        {/* Dew Point Table */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            露點溫度精密對照表
          </h2>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            環境溫度 23℃～26℃ × 相對濕度 60%～80%
          </p>

          {/* Mobile swipe helper */}
          <div className="block md:hidden text-sm text-secondary font-medium mb-3 flex items-center gap-1.5 animate-pulse bg-secondary/5 p-2.5 rounded-lg border border-secondary/20">
            <span>💡 手機用戶可左右滑動查看完整表格</span>
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">環境溫度</th>
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">60% RH</th>
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">65% RH</th>
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">70% RH</th>
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">75% RH</th>
                  <th className="border border-gray-300 px-2 py-3 sm:px-4 sm:py-4 font-semibold">80% RH</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 font-bold bg-gray-50">23°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">14.9°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">16.0°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">17.1°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">18.2°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">19.2°C</td>
                </tr>
                <tr className="bg-gray-50 text-center">
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 font-bold bg-gray-100">24°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">15.7°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">16.9°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">18.0°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">19.1°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">20.1°C</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 font-bold bg-gray-50">25°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">16.6°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">17.8°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">18.9°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">20.0°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">21.0°C</td>
                </tr>
                <tr className="bg-gray-50 text-center">
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 font-bold bg-gray-100">26°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">17.5°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">18.7°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">19.8°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">20.9°C</td>
                  <td className="border border-gray-300 px-2 py-2.5 sm:px-4 sm:py-3 text-gray-700">21.9°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Condensation Mechanism */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            結露發生的三層機制
          </h2>

          <div className="mb-8">
            <img 
              src="/images/空調冷凝示意圖1_0.png" 
              alt="空調冷凝（結露）原理示意圖"
              className="w-full rounded-lg shadow-lg mb-6"
            />
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-lg">第一層：溫暖潮濕的室內空氣</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg">26°C、60% 相對濕度的室內空氣含有大量水蒸氣</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-lg">第二層：冰冷的出風口表面</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg">12°C 的出風口表面溫度低於露點溫度 15.2°C</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-lg">第三層：水滴形成與凝結</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg">室內空氣接觸冷表面時，水蒸氣立即凝結成液態水，形成冷凝水膜</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Moisture Rebound Effect */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            回潮效應
          </h2>

          <div className="mb-8">
            <img 
              src="/images/回潮效應1_0.png" 
              alt="回潮效應（濕度反彈現象）圖解"
              className="w-full rounded-lg shadow-lg mb-6"
            />
          </div>

          <Card className="bg-blue-50 border-2 border-primary">
            <CardContent className="pt-6">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                空調關閉後，室內濕度會在短短數分鐘內從 40～50% 迅速回升至 75～80%。這種現象稱為「回潮效應」。它說明了一個重要事實：單純降低空氣濕度並不能根本解決結露問題。因為當空調停止運轉時，環境濕度會迅速恢復到高濕狀態，結露問題隨即重現。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Traditional Methods Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            傳統防霉方式的物理極限
          </h2>

          <div className="space-y-4">
            <Alert className="border-l-4 border-l-accent bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <AlertTitle className="text-accent font-bold">❌ 定期清潔與除黴噴劑</AlertTitle>
              <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
                事後補救，黴菌數天內重新萌發。無法從根本上防止冷凝水膜的形成。
              </AlertDescription>
            </Alert>

            <Alert className="border-l-4 border-l-accent bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <AlertTitle className="text-accent font-bold">❌ 除濕機的局限性</AlertTitle>
              <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
                只能抽取空氣中的水氣，無法防止出風口表面的冷凝水膜形成。回潮效應使其效果短暫。
              </AlertDescription>
            </Alert>

            <Alert className="border-l-4 border-l-accent bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <AlertTitle className="text-accent font-bold">❌ 降低空調溫度設定</AlertTitle>
              <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
                反而加劇結露，飲鴆止渴。出風口溫度更低，結露更嚴重。
              </AlertDescription>
            </Alert>

            <Alert className="border-l-4 border-l-accent bg-orange-50">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <AlertTitle className="text-accent font-bold">❌ 被動式空氣清淨機與濾網</AlertTitle>
              <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
                無法防止表面冷凝水膜，濾網本身成為黴菌溫床。
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Core Insight */}
        <section>
          <Alert className="border-2 border-primary bg-blue-50">
            <AlertCircle className="h-6 w-6 text-primary" />
            <AlertTitle className="text-lg text-primary font-bold">核心洞察</AlertTitle>
            <AlertDescription className="text-base text-gray-800 mt-3">
              黴菌孢子一接觸到冷凝水膜，就會立即萌發。因此，防止表面形成穩定的水膜，比單純降低空氣濕度更為關鍵。傳統被動防霉方式無法做到這一點，必須引入具備「表面脫水」與「表面滅活」雙重機制的主動淨化技術。
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </Layout>
  );
}
