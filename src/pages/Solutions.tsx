import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { AlertTriangle, CheckCircle, Wind } from 'lucide-react';

export default function Solutions() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            防制方案
          </h1>
          <p className="text-lg text-white/90">
            階層式防護策略：從操作調整到主動淨化的完整解決方案
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">三層防護策略</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            面對台灣極端潮濕氣候，務實策略應為：「優先調整空調操作參數 + 輔助除濕 + 導入主動淨化技術進行表面控水與滅活。」
          </p>
        </section>

        {/* Layer 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              優先操作調整（立即生效、零成本）
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            最關鍵的第一步，透過改變空調運轉參數來預防結露。
          </p>

          <div className="space-y-4 mb-8">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-5 h-5 text-primary" />
                  <CardTitle>加大風量至中高速（最關鍵動作）</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  提高風速能加速出風口表面熱交換，使面板溫度上升 1℃～3℃，常可成功跨越露點臨界線。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>出風口表面溫度上升 1℃～3℃</li>
                  <li>維持除濕效果，同時降低結露風險</li>
                  <li>立即見效，零成本</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <CardTitle>適度提高設定溫度至 25℃～26℃</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  避免過度降溫導致送風溫度過低，進而加劇結露。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>節能效益 6%～18%</li>
                  <li>出風口表面溫度有效提升</li>
                  <li>減少溫差過大問題</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <CardTitle>優化運轉模式</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  避免頻繁開關機，改用除濕模式或低負荷連續運轉。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>減少溫濕度劇烈波動</li>
                  <li>降低回潮效應發生頻率</li>
                  <li>延長空調壽命</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Layer 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              輔助除濕與設備升級
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            當操作調整仍無法完全解決時，考慮硬體升級。
          </p>

          <div className="space-y-4 mb-8">
            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>獨立除濕機</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  在臥室、客廳等核心區域配置獨立除濕機，分擔空調的潛熱負荷，有效降低環境濕度。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>環境濕度可降至 50%～60%</li>
                  <li>減少結露風險</li>
                  <li>可與空調協同運作</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>全熱交換器（ERV）</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  新屋或翻修時，建議規劃全熱交換器，在引入新風時先行預除濕，從源頭控管濕度。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>從源頭預除濕，效果持久</li>
                  <li>節能效益顯著</li>
                  <li>長期防霉最佳投資</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="bg-blue-50 border-2 border-primary mb-8">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <AlertTitle className="text-primary font-bold">重要提醒</AlertTitle>
            <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
              除濕機和全熱交換器能有效降低空氣濕度，但仍無法完全防止表面冷凝水膜的形成，特別是在溫度劇烈變化時。因此，第三層主動淨化技術仍然必要。
            </AlertDescription>
          </Alert>
        </section>

        {/* Layer 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              WETOP 環境淨化器：PICT® 主動防護技術
            </h2>
          </div>

          <Card className="border-2 border-accent mb-8 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">雙重防護機制</CardTitle>
              <CardDescription className="text-base sm:text-lg">
                在台灣高濕環境下，單靠被動除濕與風速調整，仍難完全避免天氣變化造成的偶發結露。WETOP 環境淨化器搭載的 PICT® 技術能提供「空氣＋表面」雙效主動防護。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">物理控水（表面脫水作用）</h4>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">PICT® 產生的活性淨化因子能影響出風口表面微量水分的氫鍵結構，加速冷凝水膜蒸散，破壞黴菌孢子發芽所需的連續水膜條件。</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-base sm:text-lg">生化滅活（分子氧化機制）</h4>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">釋放的 H₂O₂ 在潮濕表面濃縮，直接氧化破壞黴菌細胞膜與蛋白質，從源頭滅活黴菌孢子。</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-green-50 border-2 border-secondary mb-8">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <AlertTitle className="text-secondary font-bold">認證與應用</AlertTitle>
            <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>SNQ 國家品質標章</li>
                <li>國家醫療品質獎認證</li>
                <li>長期應用於桃園國際機場、馬偕醫院、國泰長照中心等高風險場域</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert className="bg-yellow-50 border-2 border-accent">
            <AlertTriangle className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent font-bold">安全標準</AlertTitle>
            <AlertDescription className="text-gray-800 text-base sm:text-lg mt-2">
              臭氧濃度控制在 &lt;50ppb 自然背景範圍，符合安全標準，適合人機共存長期使用。
            </AlertDescription>
          </Alert>
        </section>

        {/* Hardware Optimization */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            硬體優化與日常維護
          </h2>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>選用低導熱出風口材料</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  材料導熱性直接影響出風口表面溫度，選對材料可有效提高表面溫度。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>優先選用低導熱 ABS 塑鋼出風口</li>
                  <li>加貼防結露保溫材料</li>
                  <li>有效提高表面溫度 2℃～3℃</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>定期清潔</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  定期清潔可防止微生物積累，維持空調系統正常運作效能。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>每月檢查一次出風口</li>
                  <li>梅雨、夏季每兩週檢查一次</li>
                  <li>確保排水系統暢通無積水</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>追蹤系統參數</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base sm:text-lg mb-3">
                  定期確認空調系統設定參數與實際量測數值的差異符合預期。
                </p>
                <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1.5">
                  <li>實測出風口表面溫度</li>
                  <li>監測室內溫濕度變化趨勢</li>
                  <li>發現異常立即調整</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Summary */}
        <section>
          <Alert className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary">
            <CheckCircle className="h-6 w-6 text-primary" />
            <AlertTitle className="text-lg text-primary font-bold">防制策略總結</AlertTitle>
            <AlertDescription className="text-gray-800 mt-3">
              <p className="text-base sm:text-lg mb-3">
                在台灣年平均濕度接近 80% 的客觀條件下，空調出風口發霉難以單靠傳統被動濾網或事後清洗根除。
              </p>
              <ul className="list-disc list-inside space-y-2 text-base sm:text-lg">
                <li><strong>第一層（零成本）：</strong>操作調整 - 加大風量、調高溫度設定、連續低負荷運轉</li>
                <li><strong>第二層（硬體）：</strong>輔助除濕 - 獨立除濕機、全熱交換器</li>
                <li><strong>第三層（主動）：</strong>WETOP PICT® - 物理控水 + 生化滅活雙重防護</li>
                <li><strong>日常維護：</strong>定期清潔、選用低導熱材料、追蹤系統參數</li>
              </ul>
              <p className="mt-3 text-base sm:text-lg text-gray-700">
                現代防霉的核心，是以熱力學原理匹配表面溫度與露點溫度，並結合主動淨化技術，徹底剝奪微生物生存條件。
              </p>
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </Layout>
  );
}
