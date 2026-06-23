import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <AlertCircle className="w-16 h-16 text-accent mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">404 找不到網頁</h1>
        <p className="text-gray-600 mb-8">
          很抱歉，您所尋找的頁面不存在或已被移除。
        </p>
        <Link href="/">
          <a>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full">
              返回首頁
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
