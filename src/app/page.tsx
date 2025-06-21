import Image from "next/image";
import Avatar from './components/Avatar';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Accessible Avatar Component Demo</h1>
          <p className="text-gray-600 mb-8">展示不同类型的头像组件使用示例</p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          {/* 默认头像 (无src) */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">默认头像</h3>
            <Avatar
              alt="默认用户头像"
              size={64}
            />
            <p className="text-xs text-gray-500 mt-2">无src参数</p>
          </div>

          {/* 本地图片 */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">本地图片</h3>
            <Avatar
              src="/avatar.png"
              alt="本地头像"
              size={64}
            />
            <p className="text-xs text-gray-500 mt-2">public文件夹</p>
          </div>

          {/* 远程图片 - 高优先级 */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">远程图片 (高优先级)</h3>
            <Avatar
              src="https://example-bucket.s3.amazonaws.com/images/user1.jpg"
              alt="远程用户头像"
              size={64}
              priority={true}
            />
            <p className="text-xs text-gray-500 mt-2">priority=true</p>
          </div>

          {/* 远程图片 - 懒加载 */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">远程图片 (懒加载)</h3>
            <Avatar
              src="https://cdn.myapp.com/avatars/user2.jpg"
              alt="懒加载头像"
              size={64}
              priority={false}
            />
            <p className="text-xs text-gray-500 mt-2">priority=false</p>
          </div>

          {/* 不同尺寸 */}
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">不同尺寸</h3>
            <div className="flex gap-2 justify-center">
              <Avatar
                src="/avatar.png"
                alt="小头像"
                size={32}
              />
              <Avatar
                src="/avatar.png"
                alt="中头像"
                size={48}
              />
              <Avatar
                src="/avatar.png"
                alt="大头像"
                size={80}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">32px, 48px, 80px</p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg max-w-2xl">
          <h2 className="text-lg font-semibold mb-3">组件特性</h2>
          <ul className="text-sm space-y-2">
            <li>✅ 支持本地和远程图片源</li>
            <li>✅ 自动圆形裁剪 (rounded-full)</li>
            <li>✅ 响应式模糊占位符</li>
            <li>✅ 无障碍支持 (alt, aria-label, role)</li>
            <li>✅ 防止布局偏移 (CLS)</li>
            <li>✅ 懒加载和优先级加载</li>
            <li>✅ 自动图片优化 (WebP/AVIF)</li>
          </ul>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            src="/avatar.png"
            alt="Learn"
            size={24}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
