import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/Layout';

const faqItems = [
  {
    question: '為什麼我的空調出風口會結露？',
    answer: '這是因為出風口表面溫度低於室內空氣的露點溫度。在台灣高濕環境下（相對濕度 65%～75%），露點溫度通常在 17℃～21℃ 之間。如果空調為了快速降溫而將送風溫度設得過低（13℃～16℃），就會導致出風口表面溫度低於露點溫度，形成 3℃～5℃ 的溫度差，結露就會發生。'
  },
  {
    question: '結露和發霉之間有什麼關係？',
    answer: '結露形成的冷凝水膜是黴菌孢子的理想生長環境。黴菌孢子一接觸到這層水膜，就會立即萌發並迅速繁殖。因此，防止表面形成穩定的水膜比單純降低空氣濕度更為關鍵。傳統的除濕機只能降低空氣濕度，無法防止表面冷凝水膜的形成。'
  },
  {
    question: '我應該如何立即改善空調結露問題？',
    answer: '最簡單有效的方法是：(1) 加大風量至中高速，提高出風口表面溫度 1℃～3℃；(2) 適度提高設定溫度至 25℃～26℃；(3) 避免頻繁開關機，改用除濕模式或低負荷連續運轉。這些操作調整零成本，立即生效，常可成功跨越露點臨界線。'
  },
  {
    question: '除濕機能解決空調結露問題嗎？',
    answer: '除濕機只能降低空氣濕度，無法完全防止表面冷凝水膜的形成。當溫度下降或空調關閉時，相對濕度會迅速回升（回潮效應），出風口周邊仍會形成冷凝水膜。因此，除濕機是輔助手段，不能作為根本解決方案。'
  },
  {
    question: '什麼是回潮效應？',
    answer: '回潮效應是指空調關閉後，室內相對濕度在短時間內迅速回升的現象。空調運轉時，冷凝水被持續抽出，相對濕度下降至 40～50%。但空調一關閉，蒸發器上的冷凝水會重新蒸發，原本隱藏在環境中的水分會在數分鐘內迅速回升至 75～80%。這正是黴菌孢子最活躍的時刻。'
  },
  {
    question: 'WETOP PICT® 技術如何防止黴菌生長？',
    answer: 'PICT® 技術提供雙重防護：(1) 物理控水 - 破壞水分子的氫鍵結構，加速冷凝水膜蒸散；(2) 生化滅活 - 釋放的 H₂O₂ 在潮濕表面濃縮，直接氧化破壞黴菌細胞膜與蛋白質。即使偶有冷凝水，也不易發霉。'
  },
  {
    question: 'WETOP PICT® 技術安全嗎？',
    answer: '完全安全。WETOP PICT 技術已通過嚴格微生物測試，獲得 SNQ 國家品質標章與國家醫療品質獎肯定。臭氧控制在 <50ppb 自然背景範圍，適合人機共存。已長期應用於桃園國際機場、馬偕醫院、國泰長照中心等高風險場域。'
  },
  {
    question: '我應該選擇什麼樣的出風口材料？',
    answer: '優先選用低導熱 ABS 塑鋼出風口，或在現有出風口加貼防結露保溫材料。低導熱材料能減少熱量散失，提高出風口表面溫度，從而降低結露風險。'
  },
  {
    question: '全熱交換器（ERV）能解決結露問題嗎？',
    answer: '全熱交換器在引入新風時先行預除濕，能從源頭控管濕度，是長期防霉的最佳投資。特別適合新屋或翻修時安裝。結合其他防護措施，能大幅降低結露和發霉風險。'
  },
  {
    question: '我應該多久清潔一次空調出風口？',
    answer: '建議每月檢查一次，如發現積水或污垢，應立即清潔。在高濕季節（梅雨、夏季），建議每兩週檢查一次。定期清潔能防止微生物滋生，維持空調正常運作。'
  },
  {
    question: '如何判斷我的環境是否處於結露危險區間？',
    answer: '查看露點溫度對照表。如果您的室內相對濕度在 70%～80%，環境溫度在 24℃～26℃，那麼露點溫度就在 18℃～21℃ 之間。如果空調出風口表面溫度低於這個範圍，就處於結露危險區間，應立即調整空調參數。'
  },
  {
    question: '我可以預約環境檢測嗎？',
    answer: '當然可以！我們提供個人化的環境檢測與優化方案。請提供您的空調型式（壁掛、吊隱、中央等）、參數設定、實測溫濕度數據或出風口照片，我們將透過專業分析，為您量身打造最適化的操作設定表與改善方案。'
  }
];

export default function FAQ() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            常見問題
          </h1>
          <p className="text-lg text-white/90">
            關於空調結露、發霉防制的常見疑問解答
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-gray-50">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-semibold text-gray-900 text-lg sm:text-xl">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/30">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            還有其他問題？
          </h3>
          <p className="text-gray-700 mb-6">
            預約免費環境評估，我們的專家將為您詳細解答並提供個性化的防制方案。
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-orange-600">
              預約免費環境評估
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
