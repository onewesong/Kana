# 日语五十音图学习工具 🎌

一个现代化的日语五十音图Web应用，帮助学习者更轻松地掌握日语基础假名。使用Next.js和TailwindCSS构建，提供优雅的用户界面和流畅的学习体验。

## ✨ 主要特性

- 🎨 精心设计的UI界面，采用优雅的渐变配色
- 🔄 支持平假名和片假名的即时切换
- 📝 集成罗马字注音，辅助发音学习
- 🎯 按行分类的色彩系统，帮助记忆
- 📱 完全响应式设计，支持各种设备
- 🌈 细腻的交互动画效果
- 🎓 适合初学者的直观学习工具

## 🚀 开始使用

1. 克隆项目:

```bash
git clone https://github.com/onewesong/Kana
cd Kana
```

2. 安装依赖:

```bash
pnpm install
```

3. 启动开发服务器:

```bash
pnpm dev
```

4. 在浏览器打开 [http://localhost:3000](http://localhost:3000)

## 🛠️ 技术栈

- [Next.js 14](https://nextjs.org/) - React框架
- [TailwindCSS](https://tailwindcss.com/) - 原子化CSS框架
- [Shadcn/ui](https://ui.shadcn.com/) - 可定制UI组件库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全保证
- [Radix UI](https://www.radix-ui.com/) - 无障碍UI原语

## 💻 项目结构

```
├── app/                  # Next.js 应用目录
├── components/          # React组件
│   ├── ui/             # UI组件
│   └── HiraganaChart.tsx   # 五十音图主组件
├── lib/                # 工具函数
└── public/            # 静态资源
```

## 📖 使用方法

将五十音图组件集成到你的React/Next.js项目中：

```tsx
import HiraganaChart from '@/components/HiraganaChart';

export default function YourPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <HiraganaChart />
    </div>
  );
}
```

## 🎯 特色功能

- **双假名系统**: 支持平假名和片假名的切换显示
- **罗马字标注**: 帮助理解发音规则
- **色彩编码**: 使用不同颜色区分假名行
- **响应式设计**: 完美适配从手机到桌面的各种设备
- **优雅动画**: 平滑的过渡效果增强用户体验

## 🤝 贡献指南

欢迎提交Pull Request和Issue！让我们一起改进这个项目。

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📄 许可证

MIT © [onewesong](https://github.com/onewesong)

---

如果这个项目对你有帮助，欢迎给个 ⭐️ 支持！

[在线演示](https://onewesong.github.io/Kana/) | [问题反馈](https://github.com/onewesong/Kana/issues)
