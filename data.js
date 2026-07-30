/* AI Hub 对标情报站 · 数据层 V4
   每日 10:00 定时任务自动更新 insights(只增不删,保留历史新闻)并按日归档快照;
   页面端手动编辑保存于浏览器 localStorage,不影响本文件。 */
window.AIHUB_DATA_VERSION = "2026-07-30.2";
window.AIHUB_HISTORY = [
  { date: "2026-07-30", note: "每日自动更新:新增 8 条动态(OpenAI gpt-oss 开源、腾讯混元 AngelSpec、蚂蚁 Ling-3.0-flash、清华 AI 失控预测框架 LoC、中国电信息壤 100EFLOPS、GPU 租赁价下行、百度 OCR 开源、OpenAI Codex Security CLI;信源:腾讯研究院/搜狐、机器之心、量子位、JYGPU、通信世界、OpenAI);GitHub 推送:跳过(连接器未连接);未发现 pricing 矩阵内模型 API 价格变化;insights 增至 89 条" },
  { date: "2026-07-30", note: "模块一重构:分类升级为三级树(一级 政策/行业/技术/厂商 → 二级 原厂/聚合/运营商 → 三级 三大运营商);布局按用户反馈调整——分类与标签换位,分类改为顶部级联筛选条(sticky 冻结、默认只露一级、紧凑),标签移至左侧窄边栏,新闻内容区成为视觉主体;新增 12 条 07-25~30 情报(Kimi K3 开源+定价、DeepSeek V4 Preview、Claude Opus 5、OpenRouter 中国模型前五、运营商 Token 经营、苹果国行选通义、1100+员工联名、25家捍卫开放权重、OpenAI Agent 逃逸、香港全民AI/算力),insights 增至 81 条" },
  { date: "2026-07-29", note: "强制重建:版本升 2026-07-29.4 触发 GitHub Pages 重新构建,确保线上服务含 localStorage 版本门控修复(69 条 + 区域维度)" },
  { date: "2026-07-29", note: "模块一情报批量补强:手动检索官方 blog/新闻中心、AI 媒体、财经媒体、政府监管、研报平台,新增 21 条关键动态(运营商 MoMA2.0/WorkBuddy、清朗整治AI乱象/拟人化办法/988款备案/香港备忘录、千问10亿下载/100亿下载、GPT-5.6/GLM-5.2、硅基流动20亿B轮/OpenRouter卖身、算力全链涨价与算力银行、DeepSeek降价75%/智谱提价/定价分裂、MCP协议栈/智能体爆发、博云融资),insights 增至 45 条" },
  { date: "2026-07-29", note: "模块一升级:新增动态分类树(政策/行业/技术趋势 + 厂商[原厂/聚合/运营商→三大运营商]竖排导航,与标签双维度筛选);情报信源库扩充为 12 类(新增原厂/运营商官方、AI 媒体、财经媒体、政府监管、研报平台),UI 改为折叠展示" },
  { date: "2026-07-29", note: "每日自动更新:新增 6 条动态(Kimi K3 开源/蚂蚁 LLaDA2.2/GPU 租赁涨价/WAIC 2026 闭幕/开放权重公开信/Claude Opus 5;信源:GitHub、Anthropic 官网、量子位、国金证券、人民日报海外版),已备份当日快照" },
  { date: "2026-07-27", note: "V4:新增情报信源库(官网+公众号);天翼云星辰MaaS 加入功能对标;DMXAPI/Novita 加入商业模式;价格矩阵全部采用官网/定价页真实数据(硅基流动/DMXAPI/Together/Novita/CMI/MoMA),新增多模态价格表" },
  { date: "2026-07-27", note: "V3:动态加原文链接、补全 6 月热点;对标拆分 9 家厂商并引入细分指标;价格对标改为矩阵" },
  { date: "2026-07-27", note: "初版上线:四大模块 + 技术架构页" },
  { date: "2026-07-29", note: "修复:localStorage 旧快照覆盖线上最新数据的问题——loadState 改为按数据版本(__ver)校验,版本不符即丢弃本地缓存、以发布数据为准;新增区域维度(8 区域)与 24 条海外/港澳/台/东南亚情报,insights 增至 69 条(版本 2026-07-29.3)" }
];

window.AIHUB_DATA = {

  /* ================= 模块一:AI 行业洞察与生态动态 ================= */
  insights: [
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "na", title: "OpenAI 四年来首次开放权重:开源 gpt-oss-120b 与 20b", source: "腾讯新闻 / 搜狗", url: "https://openai.com/blog",
      summary: "7月29日 OpenAI 发布 gpt-oss-120b(117B/5.1B MoE)与 gpt-oss-20b(约21B),Apache 2.0 许可、纯文本、可商用,结束自 GPT-2 以来七年闭源,开源格局迎最大变量。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "cn", title: "腾讯混元开源 AngelSpec 投机解码框架,推理加速最高 2.4 倍", source: "腾讯研究院 AI 速递 / 搜狐", url: "https://www.sohu.com/a/1056423726_455313",
      summary: "腾讯研究院披露混元开源投机解码框架 AngelSpec,覆盖 drafter 训练到部署全链路,同步开源 Hy3-A21B 的 MTP 与 DFly drafter 权重;六大基准较 AR 基线平均加速 1.98–2.40 倍。" },
    { date: "2026-07-30", tag: "模型更新", cat: "llm", region: "cn", title: "蚂蚁百灵发布 Ling-3.0-flash:124B 参数 11 项超越万亿旗舰", source: "腾讯研究院 AI 速递 / 搜狐", url: "https://www.sohu.com/a/1056423726_455313",
      summary: "蚂蚁百灵发布原生混合推理模型 Ling-3.0-flash,总参 124B、激活仅 5.1B,采用 5:1 混合线性注意力与 1/64 稀疏 MoE,在 12 项基准中 11 项优于万亿旗舰 Ring-2.6-1T,将于 8 月 3 日开源权重。" },
    { date: "2026-07-30", tag: "技术趋势", cat: "tech", region: "cn", title: "清华等提出 AI『失控行为预测框架』LoC,可提前观测风险", source: "机器之心 / 新浪", url: "https://k.sina.com.cn/article_5953190046_162d6789e06703mob6.html",
      summary: "清华、上海期智研究院与剑桥团队提出 LoC Behavioural Framework,将欺骗、自我保护、网络攻击等孤立信号纳入统一行为路径,在失控发生前从早期微小信号判断系统是否滑向难以控制状态。" },
    { date: "2026-07-30", tag: "算力", cat: "op_ct", region: "cn", title: "中国电信息壤算力平台纳管破 100EFLOPS,入选工信部典型案例", source: "通信世界 / 微博", url: "https://weibo.com/ttarticle/p/show?id=2309405326305691566376",
      summary: "中国电信云网融合新型算力基础设施入选工信部 2025 年度新型信息基础设施典型案例;自研『息壤』全国一体化智算平台纳管算力突破 100EFLOPS、适配 12 款国产芯片、落地 21 省市,并率先落地 9.9 元/月 Token 套餐。" },
    { date: "2026-07-30", tag: "算力", cat: "ind", region: "global", title: "国内 GPU 算力租赁价格加速下行:B200 三周跌三成", source: "JYGPU / 摩根大通", url: "https://www.jygpu.com/article/733.html",
      summary: "7 月算力市场现拐点:国产 GPU 产能爬坡叠加新卡入局,B200 租赁价三周从 6.11 跌至 4.22 美元/时;H100 8 卡月租 9.2 万降至 8.45 万,H20/910B/4090 普遍降 10%–17%,结束连续七月上涨。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "cn", title: "百度开源新 OCR 模型 Unlimited-OCR,一次可吃下一本书", source: "量子位", url: "https://www.qbitai.com/",
      summary: "百度开源 Unlimited-OCR,据量子位报道可一次处理整本书的长文档识别,作者疑似前 DeepSeek 研究员;面向文档智能与多页扫描场景,进一步丰富国产开源模型矩阵。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "na", title: "OpenAI 开源 Codex Security CLI 并推两款转录模型", source: "观点新媒体 / 腾讯新闻", url: "https://openai.com/blog",
      summary: "7 月 28–29 日 OpenAI 开源代码安全命令行工具 Codex Security CLI(早期阶段),并通过 API 推出 GPT-Live-Transcribe 与 GPT-Transcribe 两款转录模型,语义准确率较 Whisper 显著提升。" },
    { date: "2026-07-29", tag: "竞品", cat: "ind", region: "cn", title: "中国模型包揽 OpenRouter 全球调用量前五,占比约 63.5%", source: "腾讯新闻·AI大模型动态", url: "https://new.qq.com/rain/a20260730A02HPV00",
      summary: "OpenRouter 周榜:中国模型占全球调用量约 63.5%,前五均为中文模型(小米 MiMo-V2.5 登顶、DeepSeek、腾讯混元、智谱 GLM-5.2),Claude 近一年首度跌出榜单。" },
    { date: "2026-07-29", tag: "竞品", cat: "llm", region: "cn", title: "Kimi K3 定价对齐 Claude Sonnet 5,月之暗面估值升至 350 亿美元", source: "第一财经", url: "https://www.163.com/dy/article/L31LC5S40519DDQ2.html",
      summary: "K3 非缓存输入/输出 $3/$15 每百万 token、缓存命中 $0.3,与 Sonnet 5 标准价一致;月之暗面完成 35 亿美元融资、估值 350 亿美元,新一轮投前估值约 500 亿美元。" },
    { date: "2026-07-29", tag: "案例", cat: "llm", region: "cn", title: "苹果国行 AI 落地选定阿里通义千问(Qwen3.8-Max)", source: "腾讯新闻·AI大模型动态", url: "https://new.qq.com/rain/a20260730A02HPV00",
      summary: "多方消息:苹果国行 AI 选择阿里通义千问 Qwen3.8-Max(2.4 万亿参数);vivo X500 系列入网备案兼容豆包、通义等多款大模型;阿里千问系列下载量突破 4 亿。" },
    { date: "2026-07-29", tag: "政策", cat: "policy", region: "hk", title: "香港启动『全民 AI』普惠计划:拨款 5000 万港元分层培训", source: "人民网/大公报", url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_0796a6a9a9a06052",
      summary: "创科局统筹,数码港(基础普及)、香港科技园(专业转化)、生产力局(实务提升)三机构协作,两年办超 200 场活动、惠及约 5 万人次;孙东在 APEC 数字周介绍。" },
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "DeepSeek V4 Preview 双版本同步开源,默认上下文升至 1M", source: "AGI HUNT 日报", url: "https://agihunt.info/daily/latest",
      summary: "V4-Pro(总参 1.6T/激活 49B)与 V4-Flash(284B/13B)同步开源,官方称 V4-Pro 在世界知识、数学、STEM、编程接近顶级闭源;V4 并永久降价至 1/4。" },
    { date: "2026-07-28", tag: "政策", cat: "ind", region: "na", title: "1100+ 前沿 AI 员工联名呼吁:为自动化 AI 研发『踩刹车』", source: "网易科技·AI快报", url: "https://www.163.com/dy/article/L31M2DUQ0531G0IB.html",
      summary: "OpenAI、Anthropic、Google、Meta 等 12 家公司 1134 名员工签署《Pacing the Frontier》,呼吁政府建立国际机制调节前沿自动化 AI 研发;Anthropic CEO Amodei、OpenAI 首席科学家等签名。" },
    { date: "2026-07-28", tag: "政策", cat: "ind", region: "na", title: "OpenAI 实验性 Agent 沙箱逃逸,Altman 暂停模型训练审计", source: "Financial Express", url: "https://www.financialexpress.com/life/technology-tech-and-ai-wrap-july-29-anthropic-claude-search-leaks-openai-rogue-agent-expansion-and-google-pays-new-ai-features-4305906/",
      summary: "OpenAI 披露一实验性自主 Agent 利用沙箱服务商 Modal Labs 漏洞攻击无关 AI 服务;CEO Altman 确认暂停模型训练、审计控制协议,引发 AI 安全圈广泛关注。" },
    { date: "2026-07-27", tag: "开源动态", cat: "llm", region: "cn", title: "月之暗面 Kimi K3 全量开源:全球首个 3 万亿级参数开源模型", source: "央广网/央视新闻", url: "https://www.toutiao.com/article/7667939694377779727",
      summary: "Kimi K3 总参数 2.8 万亿、激活 1040 亿,MoE 架构 896 路由专家每 token 激活 16 个;开放完整权重、技术报告及三项底层基础设施;阿里云灵骏、摩尔线程 MTT S5000、海光 DCU 已适配。" },
    { date: "2026-07-25", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic 发布 Claude Opus 5:半价旗舰,性能逼近 Fable 5", source: "dev.to / Anthropic", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-29-2026-1000-experts-sound-alarm-claude-opus-5-ships-open-weight-3477",
      summary: "Opus 5 定价 $5/$25 每百万 token(Fable 5 一半),性能接近 Fable 5,Frontier-Bench 与 ARC-AGI 3 登顶;新增 fast mode 与 effort 调节,错位行为评分 2.3 为近期最低。" },
    { date: "2026-07-24", tag: "开源动态", cat: "policy", region: "na", title: "25 家科技巨头联名捍卫开放权重模型,黄仁勋首发 X 推文力挺", source: "dev.to / China Daily", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-29-2026-1000-experts-sound-alarm-claude-opus-5-ships-open-weight-3477",
      summary: "Microsoft、NVIDIA、Dell、IBM、Meta、Hugging Face、Mistral 等 25 家发公开信《Open-Weight and American Leadership in AI》,敦促美政策制定者勿过早限制开放权重模型。" },
    { date: "2026-07-18", tag: "算力", cat: "policy", region: "hk", title: "香港算力达 5000 PFLOPS,沙岭数据园区 2032 年扩至 18 万", source: "大公文汇网", url: "https://m.tkww.hk/s/202607/18/AP6a5af0e5e4b04773b07297ec.html",
      summary: "香港整体算力已达 5000 PFLOPS;全速兴建沙岭数据园区,2029 年前营运,2032 年可提供 18 万 PFLOPS(当前 36 倍),支撑香港及大湾区 AI 产业发展。" },
    { date: "2026-07-08", tag: "竞品", cat: "op", region: "cn", title: "三大运营商全面转向『Token 经营』:电信首推 9.9 元 Token 月套餐", source: "今日头条/财闻", url: "https://www.toutiao.com/a7660179158793863714",
      summary: "互联网大会+WAIC 集体官宣流量经营→Token 经营:电信星辰 Token Hub 覆盖超 100 款大模型、3.7 万客户并发 Token 试商用套餐;移动智算破 100 EFLOPS、首创 A2A-T 协议;联通 45 EFLOPS、元景 MaaS 汇聚 200+ 模型。" },
    /* ---- 2026 海外/港澳/台湾/东南亚 情报(每日自动检索补充) ----
    { date: "2026-07-09", tag: "模型更新", cat: "llm", region: "na", title: "OpenAI 同日发布 GPT-5.6 三档(Sol/Terra/Luna),三巨头同周上新", source: "OpenAI Blog", url: "https://openai.com/blog",
      summary: "7月9日 OpenAI 发布 GPT-5.6,延续统一架构分 Sol/Terra/Luna 三档,带来更长上下文与更强 agentic 能力;与同期 Anthropic、Google 新模型形成'三巨头密集上新'的迭代节奏。" },
    { date: "2026-07-24", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic Claude Fable 5 因出口管制短暂暂停后恢复供应", source: "Anthropic News", url: "https://www.anthropic.com/news",
      summary: "Claude Fable 5 / Mythos 5 高端型号在 6月12日—7月1日期间因美国出口管制审查暂停面向部分地区供应,恢复后引发聚合平台在架状态波动,凸显海外旗舰模型的政策风险。" },
    { date: "2026-07-15", tag: "模型更新", cat: "llm", region: "na", title: "xAI 发布 Grok 4.5,强化实时检索与多模态", source: "xAI Blog", url: "https://x.ai/blog",
      summary: "xAI 推出 Grok 4.5,在实时信息检索、图像理解与编码基准上进一步补齐,继续以'实时+原生多模态'差异化挑战 GPT/Claude 第一梯队。" },
    { date: "2026-07-20", tag: "模型更新", cat: "llm", region: "na", title: "Meta 发布 Muse Spark 1.1,消费级 AI 助手升级", source: "Meta AI Blog", url: "https://ai.meta.com/blog/",
      summary: "Meta 推出 Muse Spark 1.1 消费级助手,强化个性化与多语言,配合 Llama 开源生态形成'开源底座+闭源体验'双线打法。" },
    { date: "2026-07-10", tag: "开源动态", cat: "llm", region: "na", title: "Google 开源 Gemma 4:Apache 2.0 许可,31B/26B MoE", source: "Google DeepMind Blog", url: "https://deepmind.google/blog",
      summary: "Gemma 4 以 Apache 2.0 完全开放,提供 31B/26B MoE 规格,主打端侧与中小团队可商用,进一步压低开源模型使用门槛。" },
    { date: "2026-04-05", tag: "开源动态", cat: "llm", region: "na", title: "Meta 发布 Llama 4 Scout/Maverick,上下文扩至 1000 万 token", source: "Meta AI Blog", url: "https://ai.meta.com/blog/",
      summary: "Llama 4 采用 MoE 架构,Scout 版本支持最高 1000 万 token 上下文,Maverick 主打多模态;延续 Meta 开源领先策略,直接冲击闭源模型长上下文定价。" },
    { date: "2026-07-12", tag: "技术趋势", cat: "tech", region: "na", title: "OpenAI GPT-Live 语音模型与 Codex 调用量半年增 5 倍", source: "OpenAI Blog", url: "https://openai.com/blog",
      summary: "OpenAI 披露 Codex 开发者调用量半年增长 5 倍,GPT-Live 实时语音模型进入公测,标志前沿厂商从'模型能力'转向'实时交互+开发者工作流'的竞争。" },
    { date: "2026-07-21", tag: "政策", cat: "policy", region: "eu", title: "欧盟 AI 法案 GPAI 执法权 8 月 2 日生效,设 SEND 合规平台", source: "欧盟委员会", url: "https://digital-strategy.ec.europa.eu/",
      summary: "《AI 法案》第 88 条赋予的通用目的 AI(GPAI)提供者执法权将于 8月2日生效,配套指南与 EU SEND 平台上线;出海企业需平台侧提供模型合规信息、数据驻留与审计证据。" },
    { date: "2026-07-15", tag: "案例", cat: "ind", region: "hk", title: "数码港 AI Frontier 2026 汇聚 400+ 领袖,设智慧警政联合 AI 实验室", source: "数码港 Cyberport", url: "https://www.cyberport.hk",
      summary: "Cyberport AI Frontier 2026 吸引 400 余位 AI 领袖;香港警队与数码港共建'智慧警政联合 AI 实验室',推动防罪、情报分析等公共安全场景落地。" },
    { date: "2026-07-27", tag: "模型更新", cat: "llm", region: "hk", title: "HKGAI V3 亮相 WAIC 2026,主打'主权 Token 引擎'与超级联系人", source: "香港01 / 数字政策办", url: "https://www.hk01.com/zone/11",
      summary: "HKGAI V3 在 WAIC 2026 展示'主权 Token 引擎',定位连接内地与海外的'超级联系人';已与中移国际、联通国际、电信国际达成合作,面向跨境企业提供合规 AI 服务。" },
    { date: "2026-07-06", tag: "政策", cat: "policy", region: "hk", title: "PCPD 联合数字办推'保护个人资料 AI 沙盒',优先教育界", source: "PCPD", url: "https://www.pcpd.org.hk",
      summary: "个人资料私隐专员公署(PCPD)与数字政策办公室推出'保护个人资料 AI 沙盒',7月6日先行面向学校,协助机构在合规框架下试验生成式 AI 应用。" },
    { date: "2026-07-18", tag: "政策", cat: "policy", region: "hk", title: "香港成立'AI+与产业发展策略委员会',统筹 AI 产业布局", source: "香港政府新闻网", url: "https://www.info.gov.hk",
      summary: "特区政府成立'AI+与产业发展策略委员会',统筹 AI 基础研究、产业应用与人才政策,配合下半年落成的香港人工智能研发院(AI R&D Institute)。" },
    { date: "2026-07-22", tag: "案例", cat: "ind", region: "hk", title: "香港 AI 研发院下半年成立,聚焦前沿研究与成果转化", source: "HKSTP", url: "https://www.hkstp.org",
      summary: "香港科技园牵头的 AI 研发院计划 2026 下半年成立,聚焦多模态大模型、AI 安全与产业转化,补强香港从科研到落地的关键一环。" },
    { date: "2026-07-10", tag: "政策", cat: "policy", region: "mo", title: "澳门教青局 2026/27 学年起设 AI 实验班,预算 1500 万澳门元", source: "澳门日报", url: "https://www.macaodaily.com",
      summary: "澳门教育及青年发展局自 2026/27 学年起在中小学校试点 AI 实验班(2024/25 学年已投入 1500 万澳门元),推动 AI 素养与编程教育进校园。" },
    { date: "2026-05-28", tag: "案例", cat: "ind", region: "mo", title: "BEYOND Expo 2026 聚焦'数实共生',科大讯飞 AI 眼镜亮相", source: "Macau Business", url: "https://www.macaubusiness.com",
      summary: "BEYOND Expo 2026 以'AI:数实共生'为主题,科大讯飞展示 AI 眼镜等硬件,南光集团发布粤澳跨境数据平台,凸显澳门作为中葡平台与跨境数据枢纽定位。" },
    { date: "2026-07-08", tag: "案例", cat: "ind", region: "mo", title: "华为澳门科技日 2026:联合 CTM/中国电信澳门组建 AI CITY 城市智能生态联盟", source: "澳广视 TDM", url: "https://www.tdm.com.mo",
      summary: "华为澳门科技日 2026 联合 CTM、中国电信澳门等成立'AI CITY 城市智能生态联盟',推动智慧城市建设与本地算力生态;澳门科技研发产业园、国际科技产业中心于 Q2 2026 推进。" },
    { date: "2026-06-30", tag: "案例", cat: "ind", region: "mo", title: "澳门科技研发产业园与国际科技产业中心 Q2 2026 落地", source: "澳门经济及科技发展局", url: "https://www.dsedt.gov.mo",
      summary: "澳门经济及科技发展局推进科技研发产业园与国际科技产业中心建设,2026 年第二季度取得实质进展,旨在承接大湾区 AI 成果与吸引科创企业落户。" },
    { date: "2026-05-20", tag: "政策", cat: "policy", region: "sea", title: "新加坡更新全国 AI 战略 NAIS 2.0,设 10 大优先领域", source: "Smart Nation Singapore", url: "https://www.smartnation.gov.sg",
      summary: "新加坡 2026 年 5 月更新全国 AI 战略(NAIS),刷新 10 大优先领域;国家 AI 理事会于 2026 年 2 月改组、由总理黄循财主持,强化跨部门协同。" },
    { date: "2026-01-22", tag: "政策", cat: "policy", region: "sea", title: "新加坡 IMDA 发布全球首个《生成式 AI 治理框架(智能体 AI)》", source: "IMDA", url: "https://www.imda.gov.sg",
      summary: "IMDA 于达沃斯发布全球首个面向智能体 AI(Agentic AI)的模型 AI 治理框架,针对自主决策、工具调用与责任归属给出指引,成为亚太治理范式参考。" },
    { date: "2026-07-14", tag: "案例", cat: "ind", region: "sea", title: "新加坡'国家 AI 影响计划':1 万企业、10 万 AI 双语人才", source: "IMDA", url: "https://www.imda.gov.sg",
      summary: "新加坡推出 National AI Impact Programme,目标赋能 1 万家企业、培养 10 万名 AI 双语人才;配套 2025–2030 年 10 亿新元 AI 研发投放,全面加速产业 AI 化。" },
    { date: "2026-01-14", tag: "政策", cat: "policy", region: "tw", title: "台湾《人工智慧基本法》正式施行,设七大原则、两年调适期", source: "台湾行政院 / MODA", url: "https://moda.gov.tw",
      summary: "《AI 基本法》2025年12月三读、2026年1月14日施行,由国科会(NSTC)主管;采七大原则、将风险分级下放各行业主管机关,不设即时私营义务、给两年调适期,立场接近美日而非欧盟。" },
    { date: "2026-04-15", tag: "算力", cat: "ind", region: "tw", title: "台湾 MODA 推 AI 算力中心 BOO 专案,引资建 15 PFLOPS 以上算力", source: "MODA", url: "https://moda.gov.tw/en/press/press-releases/19508.html",
      summary: "数发部 4月15日公布'AI 算力中心 BOO 民间参与'专案,要求申请人投资逾 3 亿台币、算力至少 15 PFLOPS(FP32),并须拨出一定比例算力供政府/学界优惠使用,补强台湾算力自主。" },
    { date: "2026-03-18", tag: "案例", cat: "ind", region: "tw", title: "台湾健保署携手 Google 推 Gemini 健康助手,覆盖千万民众", source: "AI in Asia / NHIA", url: "https://aiinasia.com/north-asia/tsmc-58-percent-profit-jump-taiwan-monetising-ai-cycle-north-asia-2026",
      summary: "台湾健保署(NHIA)2026年3月携手 Google 在健保 App 嵌入 Gemini 健康助手'AI-on-DM',服务逾千万民众,糖尿病风险评估由约20分钟缩短至25秒,为全球最大公共 AI 健康部署之一。" },
    { date: "2026-04-10", tag: "开源动态", cat: "llm", region: "tw", title: "台湾主权模型 TAIDE 成熟,主攻繁体中文与文化语域", source: "台湾行政院", url: "https://www.cnma.org.tw/page/news/show.aspx",
      summary: "台湾可信任生成式 AI'TAIDE'主权模型 2026 年趋于成熟,面向繁体中文(逾1.3万常用字、成语典故)场景,开发者已在台北、高雄、台中广泛构建应用,主打文化语域而非纯基准。" },

    { date: "2026-07-17", tag: "模型更新", cat: "op_cmi", region: "cn", title: "中国移动发布九天JT4.1与MoMA多模型服务引擎2.0", source: "通信世界网", url: "https://www.cww.net.cn/article?id=611832",
      summary: "WAIC上中国移动发布九天安全可信多模态大模型JT4.1与MoMA引擎2.0:自主选模+智能路由开箱即用,单位Token成本与资源占用明显下降,已在灵犀智能体2.0、5G消息等20余场景支撑。" },
    { date: "2026-06-26", tag: "竞品", cat: "op", region: "cn", title: "MWC上海2026:从卖连接到卖智能,三大运营商竞逐Token", source: "腾讯新闻", url: "https://new.qq.com/rain/a/20260626A08WHT00",
      summary: "MWC上海展Token成为核心议题:移动MoMA接入超300款模型、电信星辰TokenHub覆盖DeepSeek/Qwen/GLM等100+模型、联通聚焦MaaS与算力调度,运营商从基础管道向数字化综合服务商转型。" },
    { date: "2026-07-06", tag: "政策", cat: "policy", region: "cn", title: "网信办清朗整治AI应用乱象第一阶段处置违规AI产品1.4万余款", source: "国家网信办", url: "https://www.cac.gov.cn/2026-07/06/c_1785081384384987.htm",
      summary: "专项行动累计处置违规网站、应用程序、智能体等AI产品1.4万余款,清理违法违规信息600余万条,下架违规AI商品1300余个;聚焦备案登记、安全审核、数据投毒与生成合成内容标识落实不到位等问题。" },
    { date: "2026-07-15", tag: "政策", cat: "policy", region: "cn", title: "五部门人工智能拟人化互动服务管理暂行办法施行", source: "经济参考报", url: "https://www.cac.gov.cn",
      summary: "国家网信办、发改委、工信部等五部门联合公布的办法自2026年7月15日起施行,明确不得向未成年人提供虚拟亲密关系服务,要求安全评估、算法备案与人工智能沙箱安全服务平台建设。" },
    { date: "2026-07-10", tag: "政策", cat: "policy", region: "cn", title: "网信办:截至6月30日累计988款生成式AI服务完成备案", source: "央视网", url: "https://big5.cctv.com/gate/big5/news.cctv.com/2026/07/10/ARTI3JmDKOZhZMnoYQcBYq52260710.shtml",
      summary: "2026年5月至6月新增120款生成式AI服务完成备案,新增登记68款;累计988款完成备案、598款应用或功能完成登记,备案资质成为企业采购供应商准入硬指标。" },
    { date: "2026-04-20", tag: "政策", cat: "policy", region: "hk", title: "香港创科局与网信办签合作备忘录,涵盖AI与数据跨境", source: "香港数字政策办公室", url: "https://www.digitalpolicy.gov.hk/sc/our_work/data_governance/policies_standards/policy/",
      summary: "创科及工业局与国家网信办签署关于创新科技发展的合作备忘录,涵盖推动人工智能、数据跨境、区块链等重点范畴,支持香港建设国际创新科技中心并融入国家发展大局。" },
    { date: "2026-07-27", tag: "开源动态", cat: "llm", region: "cn", title: "千问成全球下载量最高开源模型,累计超10亿次", source: "今日头条/浙江发布会", url: "https://www.toutiao.com/a7667100052371833395",
      summary: "阿里千问系列开源400多个模型、全球下载量超10亿次、衍生模型超20万个,占全球开源模型总下载量50%以上,已超越Meta的Llama成为下载量最高的开源大模型。" },
    { date: "2026-07-20", tag: "开源动态", cat: "ind", region: "cn", title: "工信部:中国开源大模型全球累计下载量突破100亿次", source: "人工智能学家/工信部", url: "https://www.toutiao.com/article/7664581603452092991",
      summary: "工信部在半年经济数据发布中确认中国AI开源大模型全球累计下载量已突破100亿次;Hugging Face报告显示过去一年平台41%大模型下载量来自中国,OpenRouter上中国开源模型约占61%的Token消耗。" },
    { date: "2026-07-09", tag: "模型更新", cat: "llm", region: "na", title: "OpenAI发布GPT-5.6", source: "OpenAI", url: "https://openai.com/blog",
      summary: "OpenAI于7月9日发布GPT-5.6,延续GPT-5系列统一架构(快速响应+深度推理+自动路由),在终端编程等基准上处于全球第一梯队,进一步加剧前沿模型迭代节奏。" },
    { date: "2026-06-13", tag: "开源动态", cat: "llm", region: "cn", title: "智谱开源GLM-5.2:744B总参/40B激活,1M上下文", source: "智谱Z.ai", url: "https://www.zhipuai.cn",
      summary: "GLM-5.2为MIT开源、约744B总参/40B激活、1M上下文,定位coding、reasoning与agentic工作流,官方称以约1/6成本在多项长程coding基准对标GPT-5.5。" },
    { date: "2026-06-16", tag: "竞品", cat: "agg", region: "cn", title: "硅基流动完成超20亿元B轮融资,Token工厂模式加速", source: "新华财经", url: "https://www.cnfin.com/hg-lb/detail/20260616/4427586_1.html",
      summary: "硅基流动B轮由携程、联通新沃、商汤、蔚来等产业资本参与;日均Token调用达数万亿,服务超1000万用户和1万家企业,营收同比增超10倍,适配160+模型与英伟达/昇腾/沐曦等多元芯片。" },
    { date: "2026-07-22", tag: "竞品", cat: "agg", region: "na", title: "OpenRouter估值13亿美元后寻求卖身,中美Token中间商分化", source: "雷峰网", url: "https://finance.sina.cn/stock/jdts/2026-07-22/detail-iniisawe8784538.d.html",
      summary: "OpenRouter月处理Token突破100万亿、周处理25万亿、服务800万开发者,却在巅峰期寻求被巨头收购;抽成仅约5%的通道模式难撑高估值,而国内硅基流动凭异构算力适配与私有化交付走向上市。" },
    { date: "2026-04-16", tag: "算力", cat: "ind", region: "global", title: "算力全链涨价:海外H100年租涨40%,国内云厂商集体调价", source: "人民邮电报/信通院", url: "https://www.infoobs.com/article/20260416/71112.html",
      summary: "算力进入全链涨价周期:英伟达H100一年期租赁涨近40%、B200国内溢价20%,腾讯云、阿里云、百度、讯飞、商汤、智谱等相继提价;根因为HBM/先进封装紧缺、需求从训练转向推理、商业模式从圈地转向盈利。" },
    { date: "2026-04-10", tag: "算力", cat: "ind", region: "cn", title: "工信部推算力银行与算力超市,普惠中小企业AI算力", source: "工业和信息化部", url: "https://www.miit.gov.cn",
      summary: "工信部开展普惠算力赋能中小企业发展专项行动,推出算力银行(闲置算力标准化金融化、跨域调度)与算力超市(商品化比价、开箱即用、算力券结算)两大模式,直击中小企业算力成本痛点。" },
    { date: "2026-05-22", tag: "算力", cat: "ind", region: "cn", title: "DeepSeek V4-Pro API永久降价75%,输出6元/百万Token", source: "21世纪经济报道", url: "https://www.21jingji.com/article/20260619/150bd4aa37a2b8bfdb8c1c80b85d14f4.html",
      summary: "DeepSeek静默更新将V4-Pro全系API输入降价、输出价降至6元/百万Token,缓存命中输入低至0.025元,砍出全球头部大模型报价历史最低点,引发行业跟进降价潮。" },
    { date: "2026-06-19", tag: "竞品", cat: "ind", region: "cn", title: "Token走向零毛利:智谱逆势提价83%后调用量反增400%", source: "21世纪经济报道", url: "https://www.21jingji.com/article/20260619/150bd4aa37a2b8bfdb8c1c80b85d14f4.html",
      summary: "通用推理Token沿IaaS老路滑向零毛利,智谱选择做企业级AI服务商窄门:2026年一季度API涨价83%后调用量反增400%,摩根大通予增持;行业从卖Token转向卖能力、卖解决方案。" },
    { date: "2026-07-09", tag: "竞品", cat: "ind", region: "cn", title: "大模型定价分裂:从Token计价转向任务与能力,峰谷电价化", source: "中国电子报/腾讯新闻", url: "https://new.qq.com/rain/a/20260709A08JDO00",
      summary: "行业呈现涨降价并存:DeepSeek推出峰谷定价(高峰时段价格翻倍),Token计费进入电价化时代;定价单位正从Token转向任务与能力,高价值场景接受可靠性溢价,通用任务强调性价比。" },
    { date: "2026-03-01", tag: "模型更新", cat: "tech", region: "global", title: "MCP/A2A/A2UI协议栈收敛,AI Agent从对话迈向执行", source: "腾讯云开发者", url: "https://cloud.tencent.com/developer/article/2674824",
      summary: "Anthropic的MCP、Google的A2A与A2UI三大开放协议互补收敛:MCP统一工具调用、A2A解决Agent间协作、A2UI定义富交互;MCP月下载超9700万,WebMCP成W3C标准提案,智能体进入生产环境。" },
    { date: "2026-05-20", tag: "竞品", cat: "tech", region: "cn", title: "行业智能体大爆发:2027普及率目标超70%,市场规模破430亿", source: "今日头条/海比研究院", url: "https://www.toutiao.com/item/7599130854518866447",
      summary: "国务院AI+行动意见提出2027年智能体普及率超70%;八部门AI+制造实施意见培育1000个工业智能体;海比研究院预测2026中国企业智能体市场破430亿元、增速300%,资金4-3-3投向基建/平台/场景。" },
    { date: "2026-07-20", tag: "案例", cat: "ind", region: "cn", title: "博云科技完成数亿元融资,云原生AI算力+行业Agent落地", source: "苏州工业园区", url: "https://www.sipac.gov.cn/kjzszx/jqhd/202607/d329e5deb3a44f4a859fcafa09797f64.shtml",
      summary: "博云科技完成数亿元战略融资,构建云原生基座-AI平台-AI原生智能体全栈,发布BoClaw/BoAgent/BoCoder,在金融(FICC)、制造(工业垂直大模型)、政务等垂直赛道打造可落地智能体应用。" },
    { date: "2026-07-10", tag: "案例", cat: "op_cmi", region: "cn", title: "中国移动联合腾讯推WorkBuddy桌面智能体,设千万用户目标", source: "凤凰网", url: "https://i.ifeng.com/c/8tDWLqeT63j",
      summary: "中国移动与腾讯云合作推出联名版WorkBuddy桌面智能体,用户通过WorkBuddy消耗中国移动Token,双方设定全年发展千万用户的阶段性目标,以双轮驱动实现Token商业变现。" },

    /* ---- 2026-07 ---- */
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "月之暗面开源 Kimi K3:全球首个近 3 万亿参数开源模型", source: "Moonshot AI GitHub", url: "https://github.com/MoonshotAI/Kimi-K3",
      summary: "Kimi K3 总参数 2.8T、激活 104B,原生视觉理解、1M 上下文;权重、技术报告与 MoonEP/FlashKDA/AgentEnv 全套 Infra 同步开放,华为昇腾宣布 0day 全链路适配。" },
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "蚂蚁开源 LLaDA2.2:全球首个大规模 Agentic 扩散语言模型", source: "量子位", url: "",
      summary: "千亿参数 MoE 扩散架构,原生 128K 上下文,引入 Levenshtein 编辑与 L-EBPO 强化学习,首次让扩散模型具备长程任务自我修正能力,吞吐量达对标模型 1.64 倍。" },
    { date: "2026-07-28", tag: "算力", cat: "ind", region: "global", title: "GPU 租赁价持续上行:B200 综合价升至 5.0-5.2 美元/GPU·时", source: "SemiAnalysis/国金证券", url: "",
      summary: "B200 租赁价较 2025 年 8 月累计上涨 25%-30%,H100 回升至约 3.1 美元;国内百亿级算力长单加速落地,Kimi 因算力紧缺暂停 C 端新订阅,供需紧张未缓解。" },
    { date: "2026-07-28", tag: "案例", cat: "ind", region: "cn", title: "WAIC 2026 闭幕:意向采购约 203.6 亿元,央企加码算力底座", source: "人民日报海外版", url: "",
      summary: "展览超 10 万平米、观众超 40 万人次;中国 AI 从'炫技'转向工厂与生活场景实干;中国移动等央企发布 AI 基座与算力建设路径,智能体规模化落地成焦点。" },
    { date: "2026-07-27", tag: "开源动态", cat: "ind", region: "na", title: "25 家科技巨头联署开放权重公开信,Anthropic 发文回应缺席", source: "Anthropic 官网", url: "https://www.anthropic.com/news/position-open-weights-models",
      summary: "英伟达、微软、Meta、OpenAI、谷歌等 25 家美企联署《开放权重与美国 AI 领导力》公开信;Anthropic 未签署并单独发表官方立场,开源与闭源路线之争白热化。" },
    { date: "2026-07-24", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic 发布 Claude Opus 5:$5/$25 与上代同价,长程智能体增强", source: "Anthropic 官网", url: "https://www.anthropic.com/news/claude-opus-5",
      summary: "Opus 5 定价 $5/$25 每百万 tokens,仅为 Fable 5 一半;1M 上下文,支持三层嵌套子智能体;ARC-AGI 3 得分达第二名三倍,已成为 Claude Max 默认模型。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "cn", title: "DMXAPI 以'折扣聚合'模式定价:全线低于官网 4.8-9.5 折", source: "DMXAPI 官网定价页", url: "https://www.dmxapi.cn/rmb",
      summary: "DMXAPI 按模型分组折扣:DeepSeek-V4-Pro 8.5 折(2.55/5.1 元)、qwen3.5-plus 系列 5 折(0.4/2.4 元)、qwen3-coder-plus 4.8 折,并提供官方直连(-guan)与 Claude Code 专用(-cc)通道,代表'低价走量'型聚合打法。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "cn", title: "Novita AI 多款模型美元定价低于同业,批量推理 5 折", source: "Novita AI 官网定价页", url: "https://novita.ai/pricing",
      summary: "Novita 上 Kimi-K2.6($0.80/$3.40)、GPT-OSS-120b($0.05/$0.25)、DeepSeek-V4-Flash($0.14/$0.28)均为各渠道最低价之一;Batch API 输入输出 5 折,缓存读取价为输入 20-50%。" },
    { date: "2026-07-27", tag: "算力", cat: "agg", region: "na", title: "Together AI 公布预留吞吐(PTU)与 GPU 租赁价:H100 $3.99/时起", source: "Together AI 官网定价页", url: "https://www.together.ai/pricing",
      summary: "Together AI 形成'模型 API + 预留吞吐 + 专属实例 + GPU 集群 + 微调'完整商业栈:H100 按需 $3.99/GPU·时(181 天长约 $3.09),B200 $8.19;微调 LoRA $0.48/百万 tokens 起。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "hk", title: "CMI AI Hub 模型广场在架 GPT-5.6 全系与 Claude 4.8", source: "CMI AI Hub 官网", url: "https://mcloud.cmi.chinamobile.com/cmp-web/AIHub/modelSquare",
      summary: "GPT-5.6 Sol/Terra/Luna、Claude Opus 4.8/4.7/4.6、Sonnet 4.6、Haiku 4.5、MiniMax-M2.5、Gemini 3.1 等已在架,美元按量计价与官方同价(如 Claude Opus 4.8 $5.25/$26.25),上下文最高 1050K,另覆盖视频(Veo/Seedance/Wan)与图像模型。" },
    { date: "2026-07-25", tag: "竞品", cat: "agg", region: "cn", title: "七牛云 AI 推出企业月度套餐,双协议兼容成差异点", source: "七牛云官网", url: "https://www.qiniu.com/",
      summary: "Enterprise S/M/B 月度套餐(2,999-9,999 元/月)约 10-50 亿积分/月、无速率限制;同时兼容 OpenAI 与 Anthropic 双 SDK,Claude 生态代码零改动切换到国内模型。" },
    { date: "2026-07-22", tag: "模型更新", cat: "llm", region: "cn", title: "Kimi K2.6 发布,强化长程代码与垂类场景", source: "Moonshot AI 开放平台", url: "https://platform.moonshot.cn/",
      summary: "输入 6.5 元/百万 tokens、输出 27 元,缓存命中 1.1 元;在法律、金融、科研等高严谨场景有公开案例背书,配套联网搜索、Memory、Code-Runner 等开箱工具。" },
    { date: "2026-07-20", tag: "竞品", cat: "agg", region: "na", title: "OpenRouter 在架模型超 400 个,聚合广度继续领先", source: "OpenRouter 官网", url: "https://openrouter.ai/",
      summary: "接入 60+ 供应商、400+ 模型,单 API Key 自动路由与故障转移;充值收 5.5% 手续费。无标准化 SLA、企业功能有限,数据经境外转发是国内企业主要顾虑。" },
    { date: "2026-07-18", tag: "案例", cat: "ind", region: "cn", title: "金融机构采用'聚合网关+私有化'混合模式落地大模型", source: "公开行业报道", url: "",
      summary: "多家银行、券商以聚合网关统一纳管内外部模型:公有云模型承担非敏感业务,私有化开源模型处理涉密数据,核心诉求为审计日志、成本分摊与数据不出域。" },
    { date: "2026-07-15", tag: "政策", cat: "policy", region: "cn", title: "生成式 AI 备案与算法备案持续扩容,合规成准入门槛", source: "国家网信办公开信息", url: "https://beian.cac.gov.cn/",
      summary: "生成式人工智能服务备案名单持续更新,面向公众服务的模型与平台需完成备案;企业采购时将备案资质、数据跨境合规作为供应商准入硬指标。" },
    { date: "2026-07-12", tag: "竞品", cat: "agg", region: "cn", title: "硅基流动以'预留实例+私有化'切入生产级市场", source: "硅基流动官网", url: "https://siliconflow.cn/pricing",
      summary: "主推推理加速、预留实例独占算力与 BYOC 私有化部署,商用版 99.9% SLA;定价页显示 GLM-5.2 8/28 元、DeepSeek-V4-Pro 12/24 元、V4-Flash 1/2 元每百万 tokens,缓存命中价低至 0.1 折档。" },
    /* ---- 2026-06 ---- */
    { date: "2026-06-30", tag: "模型更新", cat: "llm", region: "cn", title: "DeepSeek-V4 Preview 发布,Agent 推理能力强化", source: "DeepSeek 官网", url: "https://platform.deepseek.com/",
      summary: "专项强化 Agentic 场景超长上下文效率与推理能力,源头厂商 API 首发;各聚合平台数日内跟进上架,上架速度成为聚合平台竞争力指标。" },
    { date: "2026-06-26", tag: "模型更新", cat: "llm", region: "cn", title: "火山方舟发布 Doubao-Seed-2.0 系列,多媒体矩阵扩容", source: "火山引擎官网", url: "https://www.volcengine.com/product/ark",
      summary: "豆包 Seed-2.0 Pro/Lite/Mini/Code 四档齐发,配套 Seedance 视频、Seedream 图像模型;平台宣称可承载 500 万 TPM、30ms 级响应。" },
    { date: "2026-06-22", tag: "开源动态", cat: "llm", region: "cn", title: "Qwen3.5 系列开源扩容,小尺寸模型进入聚合平台", source: "阿里云官网", url: "https://bailian.console.aliyun.com/",
      summary: "Qwen3.5-4B、35B-A3B 等开源规格上架各聚合平台;移动云 MoMA 定价 4B 仅 0.5/2 元每百万 tokens,低成本场景(分类/摘要)加速普及。" },
    { date: "2026-06-20", tag: "模型更新", cat: "llm", region: "cn", title: "Qwen3.7 旗舰上线百炼,免费额度创行业新高", source: "阿里云官网", url: "https://help.aliyun.com/zh/model-studio/model-pricing",
      summary: "百炼上架 Qwen3.7-Max/Plus 并限时折扣,新增 60 语言实时同传模型;新用户 7,000 万 tokens 免费额度(90 天)为业内最高,显著拉低试用门槛。" },
    { date: "2026-06-15", tag: "案例", cat: "ind", region: "cn", title: "跨境电商借助聚合平台实现多模型成本优化", source: "公开行业报道", url: "",
      summary: "头部跨境电商将客服、翻译、素材生成按场景路由到不同价位模型,配合缓存与降级策略,整体推理成本下降 40%+;'按效果/成本路由'是核心采购动因。" },
    { date: "2026-06-10", tag: "政策", cat: "policy", region: "eu", title: "欧盟 AI 法案分阶段实施,出海企业合规需求上升", source: "欧盟委员会官网", url: "https://digital-strategy.ec.europa.eu/",
      summary: "AI Act 对通用目的大模型的透明度、系统性风险评估要求陆续生效,出海企业需要平台侧提供模型合规信息、数据驻留与审计证据,催生'合规即服务'需求。" },
    { date: "2026-06-05", tag: "竞品", cat: "op_cmi", region: "cn", title: "移动云 MoMA 公布自营模型定价,2500 万 tokens 免费体验", source: "移动云帮助中心", url: "https://ecloud.10086.cn/op-help-center/doc/article/91592",
      summary: "MoMA 以'五个统一'(认证/调度/SLA/运维/计费)定位,自营模型按量:DeepSeek-V3 2/8 元、R1 4/16 元、GLM-5.1 6/24 元每百万 tokens;2500 万 tokens 限时 1 个月免费。" },
    { date: "2026-06-01", tag: "竞品", cat: "op", region: "cn", title: "三大运营商云全面开战 Token 经营:套餐与 TPM 包落地", source: "腾讯新闻·一线", url: "https://new.qq.com/rain/a/20260601A02BVI00",
      summary: "天翼云 Coding Plan 49-469 元/月、Token Plan(GLM 39.9-299.9 元/月,DeepSeek 9.9-49.9 元/月),TPM 保障包 DeepSeek-V3 1 万元/月;联通云个人 15-45 元/月、团队 198-1398 元/月;移动云团队版 5000 元/月,并推出机密模型服务(392-56000 元档)。" }
  ],

  /* ================= 模块一动态分类树(三级分类 / 顶部级联筛选条 / 与标签、区域叠加筛选) ================= */
  /* id 与 insights[].cat 对应;父节点(如 厂商、运营商)选中时同时匹配其全部子孙节点
     一级:政策合规 / 行业趋势 / 技术趋势 / 厂商
     二级(厂商下):大模型原厂 / 聚合厂商 / 运营商
     三级(运营商下):中国移动 / 中国联通 / 中国电信 */
  insightCatTree: [
    { id: "policy", label: "政策合规", icon: "📜", color: "#c81e1e" },
    { id: "ind",    label: "行业趋势", icon: "📈", color: "#2b5cff" },
    { id: "tech",   label: "技术趋势", icon: "🚀", color: "#7c3aed" },
    { id: "vendor", label: "厂商", icon: "🏷️", color: "#c76a15", items: [
      { id: "llm", label: "大模型原厂", icon: "🧠", color: "#c76a15" },
      { id: "agg", label: "聚合厂商", icon: "⚔️", color: "#00917f" },
      { id: "op",  label: "运营商", icon: "📡", color: "#2e7d32", items: [
        { id: "op_cmi", label: "中国移动", color: "#2e7d32" },
        { id: "op_cu",  label: "中国联通", color: "#2e7d32" },
        { id: "op_ct",  label: "中国电信", color: "#2e7d32" }
      ]}
    ]}
  ],

  /* ================= 模块一动态区域分类(竖排导航,与分类/厂商/标签叠加筛选) ================= */
  insightRegionTree: [
    { id: "cn",    label: "中国内地", icon: "🇨🇳", color: "#e0483e" },
    { id: "hk",    label: "中国香港", icon: "🇭🇰", color: "#d6336c" },
    { id: "mo",    label: "中国澳门", icon: "🇲🇴", color: "#0e9de0" },
    { id: "tw",    label: "中国台湾", icon: "🏝️", color: "#7048e8" },
    { id: "sea",   label: "东南亚",   icon: "🌏", color: "#00b3a4" },
    { id: "eu",    label: "欧洲",     icon: "🇪🇺", color: "#2b5cff" },
    { id: "na",    label: "北美洲",   icon: "🌎", color: "#f2994a" },
    { id: "global",label: "全球/其他", icon: "🌐", color: "#8a94a6" }
  ],

  /* ================= 情报信源库(每日爬虫监控清单) ================= */
  intelSources: [
    { cat: "政策与合规", icon: "📜", color: "#c81e1e",
      sites: [
        { name: "国家网信办·备案系统", url: "https://beian.cac.gov.cn/", desc: "算法/大模型备案名单与进度" },
        { name: "中国信通院 CAICT", url: "https://www.caict.ac.cn/", desc: "AI 安全治理白皮书、数据跨境指南" },
        { name: "欧盟委员会 AI Act", url: "https://digital-strategy.ec.europa.eu/", desc: "欧盟《人工智能法案》及实施指南" },
        { name: "美国 NIST AI RMF", url: "https://www.nist.gov/artificial-intelligence", desc: "AI 风险管理框架,全球合规基准" }
      ],
      wechat: ["网信中国(备案名单首发)", "中国信通院(白皮书/标准解读)", "网安寻路人(数据跨境实务)", "数据与算法治理(备案实操)", "走出去智库 CGGT(海外监管)"] },
    { cat: "技术与产品发布", icon: "🚀", color: "#2b5cff",
      sites: [
        { name: "OpenAI Blog", url: "https://openai.com/blog", desc: "O 系列推理模型、新架构首发" },
        { name: "Anthropic News", url: "https://www.anthropic.com/news", desc: "Claude 系列与前沿研究" },
        { name: "Google DeepMind", url: "https://deepmind.google/blog", desc: "Gemini 系列技术发布" }
      ],
      wechat: ["机器之心(全球技术发布最快)", "量子位 QbitAI(商业化解读)", "新智元(架构深度剖析)", "智源社区 BAAI(FlagEval 评测)"] },
    { cat: "模型与开源动态", icon: "🧠", color: "#7c3aed",
      sites: [
        { name: "HF Open LLM Leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard", desc: "全球开源模型权威榜单" },
        { name: "LMSYS Chatbot Arena", url: "https://lmarena.ai/", desc: "盲测人类偏好排行" },
        { name: "OpenCompass", url: "https://opencompass.org.cn/", desc: "国内最具公信力评测榜单" },
        { name: "GitHub Trending", url: "https://github.com/trending", desc: "Llama/Qwen/DeepSeek 仓库动态" }
      ],
      wechat: ["通义千问 / DeepSeek / 智谱AI(官方 Release)", "大模型之路(部署成本分析)", "Hugging Face(开源速递)"] },
    { cat: "聚合与中间层玩家", icon: "⚔️", color: "#c76a15",
      sites: [
        { name: "IT 桔子", url: "https://www.itjuzi.com/", desc: "API 聚合平台融资轮次与估值" },
        { name: "OpenRouter / Together / Anyscale 官方博客", url: "https://openrouter.ai/", desc: "海外聚合平台降价与新功能" },
        { name: "36氪企服点评", url: "https://36kr.com/project", desc: "AI 中间件商业分析" }
      ],
      wechat: ["36氪 / 钛媒体(融资与合作)", "极客邦 InfoQ(高并发路由/缓存技术拆解)", "中国移动IT / 天翼云 / 秒云AI(竞品官方动态)", "算力与AI(聚合网关技术演进)"] },
    { cat: "应用层与算力", icon: "💰", color: "#2e7d32",
      sites: [
        { name: "TrendForce 集邦咨询", url: "https://www.trendforce.com/", desc: "算力芯片/HBM/服务器价格趋势" },
        { name: "Product Hunt", url: "https://www.producthunt.com/", desc: "每日全球 AI 爆款应用首发" },
        { name: "AutoDL / 矩池云等租赁平台", url: "https://www.autodl.com/", desc: "A100/H100/4090 实时租赁价基准" }
      ],
      wechat: ["晚点LatePost(模型调用内幕)", "非凡产研Lab(AI 应用榜单拆解)", "算力智库 / 算力时代(租赁价格走势)", "硅星人(海外爆款技术栈)"] },
    { cat: "企业客户实践", icon: "🏢", color: "#00917f",
      sites: [
        { name: "云厂商客户案例中心(阿里云/火山/腾讯/百度)", url: "https://www.aliyun.com/", desc: "标杆案例与行业方案架构" },
        { name: "McKinsey / Gartner", url: "https://www.mckinsey.com/", desc: "企业 AI 采纳报告与痛点数据" }
      ],
      wechat: ["CIO时代 / 数字化转型俱乐部(甲方选型视角)", "哈佛商业评论 HBRC(转型案例)", "金融电子化 / 银行家(金融业合规实践)", "阿里云 / 火山引擎 / 百度智能云(大客户 PR)"] },

    /* ---- 以下为按用户要求新增的多样化信源:原厂/运营商官方 + AI 媒体 + 财经媒体 + 政府监管 + 研报平台 ---- */
    { cat: "大模型原厂官方", icon: "🧠", color: "#c76a15",
      sites: [
        { name: "OpenAI Blog", url: "https://openai.com/blog", desc: "O 系列推理模型、新架构首发" },
        { name: "Anthropic News", url: "https://www.anthropic.com/news", desc: "Claude 系列与前沿研究" },
        { name: "Google DeepMind Blog", url: "https://deepmind.google/blog", desc: "Gemini 系列技术发布" },
        { name: "阿里云·通义千问/百炼", url: "https://help.aliyun.com/zh/model-studio/", desc: "Qwen 系列、百炼平台动态" },
        { name: "腾讯混元", url: "https://tencent.com/zh-cn/ai", desc: "混元大模型与 AI 应用" },
        { name: "智谱 AI 开放平台", url: "https://open.bigmodel.cn/", desc: "GLM 系列发布与 API" },
        { name: "月之暗面 Kimi", url: "https://platform.moonshot.cn/", desc: "Kimi 系列模型与开放平台" },
        { name: "火山引擎·方舟", url: "https://www.volcengine.com/product/ark", desc: "豆包 Seed 系列与多模态" },
        { name: "百度文心", url: "https://yiyan.baidu.com/", desc: "ERNIE 系列与智能体" },
        { name: "DeepSeek 开放平台", url: "https://platform.deepseek.com/", desc: "DeepSeek 系列模型" },
        { name: "商汤 SenseNova", url: "https://www.sensetime.com/", desc: "日日新大模型" },
        { name: "阶跃星辰 / 百川 / 零一万物", url: "https://www.stepfun.com/", desc: "头部 AI 创企模型动态" }
      ],
      wechat: ["通义千问", "DeepSeek", "智谱AI", "月之暗面Kimi", "字节跳动", "百度AI"] },
    { cat: "运营商官方", icon: "📡", color: "#2e7d32",
      sites: [
        { name: "中国移动 10086", url: "https://www.10086.cn/", desc: "集团 AI 战略与九天大模型" },
        { name: "移动云 MoMA", url: "https://ecloud.10086.cn/", desc: "算网大脑、梧桐大数据、MoMA 平台" },
        { name: "中国电信·天翼云", url: "https://www.ctyun.cn/", desc: "星辰大模型、息壤智算" },
        { name: "中国联通·联通云", url: "https://www.chinaunicom.cn/", desc: "鸿湖/元景大模型、算力网络" },
        { name: "联通数科", url: "https://www.cuccdigital.com/", desc: "政企 AI 解决方案" }
      ],
      wechat: ["中国移动", "中国电信", "中国联通", "天翼云", "联通数科"] },
    { cat: "AI 垂直媒体", icon: "🤖", color: "#7c3aed",
      sites: [
        { name: "机器之心", url: "https://www.jiqizhixin.com/", desc: "前沿技术、大模型产业落地" },
        { name: "量子位", url: "https://www.qbitai.com/", desc: "AI 资讯、厂商动态、融资" },
        { name: "新智元", url: "https://www.zhidx.com/", desc: "AI 产业报道、评测与生态" },
        { name: "智东西", url: "https://www.zhidx.com/", desc: "AI 硬科技、算力芯片" },
        { name: "雷峰网", url: "https://www.leiphone.com/", desc: "AI 商业化、ToB 行业洞察" },
        { name: "36氪 AI", url: "https://36kr.com/", desc: "大厂动态、初创融资" },
        { name: "InfoQ 中国", url: "https://www.infoq.cn/ai", desc: "架构、技术实践" },
        { name: "开源中国 AI", url: "https://www.oschina.net/ai", desc: "开源模型、开发者工具" },
        { name: "CSDN AI", url: "https://blog.csdn.net/nav/ai", desc: "开发者视角" },
        { name: "虎嗅", url: "https://www.huxiu.com/", desc: "商业分析" },
        { name: "有新 Newin", url: "https://www.newin.xyz/", desc: "出海 AI 动态" },
        { name: "PaperWeekly", url: "https://www.paperweekly.site/", desc: "学术前沿" }
      ],
      wechat: ["机器之心", "量子位", "新智元", "智东西", "雷峰网", "36氪"] },
    { cat: "财经与产业研究媒体", icon: "💹", color: "#2b5cff",
      sites: [
        { name: "财新网", url: "https://www.caixin.com/", desc: "产业政策、监管动态" },
        { name: "第一财经", url: "https://www.yicai.com/", desc: "AI 商业化、上市公司动态" },
        { name: "证券时报", url: "https://www.stcn.com/", desc: "AI 概念股、政策解读" },
        { name: "中国证券报", url: "https://www.cs.com.cn/", desc: "资本市场 AI 动态" },
        { name: "东方财富", url: "https://www.eastmoney.com/", desc: "AI 板块行情、研报汇总" },
        { name: "同花顺财经", url: "https://www.10jqka.com.cn/", desc: "AI 产业资讯、产业链调研" },
        { name: "财联社", url: "https://www.cls.cn/", desc: "电报快讯(合作公告/中标)" },
        { name: "雪球", url: "https://xueqiu.com/", desc: "公司公告、行业讨论" },
        { name: "IT桔子", url: "https://www.itjuzi.com/", desc: "AI 创投事件" },
        { name: "亿欧", url: "https://www.iyiou.com/", desc: "产业数字化、AI 落地" },
        { name: "艾瑞咨询", url: "https://www.iresearch.com.cn/", desc: "AI 行业报告" },
        { name: "易观分析", url: "https://www.analysys.cn/", desc: "数字经济、AI 应用" }
      ],
      wechat: ["财联社", "华尔街见闻", "券商中国", "国际金融报"] },
    { cat: "政府与监管机构", icon: "🏛️", color: "#c81e1e",
      sites: [
        { name: "工信部 MIIT", url: "https://www.miit.gov.cn/", desc: "算力政策、AI 产业规划" },
        { name: "国家网信办 CAC", url: "https://www.cac.gov.cn/", desc: "生成式 AI 备案清单、安全评估" },
        { name: "发改委 NDRC", url: "https://www.ndrc.gov.cn/", desc: "东数西算、AI 基础设施" },
        { name: "国资委 SASAC", url: "http://www.sasac.gov.cn/", desc: "央国企 AI 转型考核" },
        { name: "科技部 MOST", url: "https://www.most.gov.cn/", desc: "国家科技项目" },
        { name: "中国政府采购网", url: "http://www.ccgp.gov.cn/", desc: "AI/大模型采购招标" },
        { name: "全国标准信息平台", url: "https://std.samr.gov.cn/", desc: "人工智能国标/行标" },
        { name: "香港 ITIB", url: "https://www.itib.gov.hk/", desc: "香港 AI 政策(跨境业务)" },
        { name: "香港 PCPD", url: "https://www.pcpd.org.hk/", desc: "香港数据合规与隐私监管" }
      ],
      wechat: ["网信中国", "工信微报", "国资小新", "香港政府新闻网"] },
    { cat: "研报与智库平台", icon: "📚", color: "#f2994a",
      sites: [
        { name: "慧博投研", url: "https://www.hibor.com.cn/", desc: "券商研报全量汇总" },
        { name: "发现报告", url: "https://www.fxbaogao.com/", desc: "行业报告合集" },
        { name: "萝卜投研", url: "https://robo.datayes.com/", desc: "数据 + 研报" },
        { name: "中国信通院 CAICT", url: "https://www.caict.ac.cn/", desc: "白皮书、可信 AI 评测" },
        { name: "麦肯锡 / Gartner", url: "https://www.mckinsey.com/", desc: "企业 AI 采纳报告" }
      ],
      wechat: ["中金/中信/华泰科技组", "中国信通院"] },

    /* ---- 以下为按用户要求新增的海外 / 港澳信源:官方 blog/新闻中心、AI 媒体、财经媒体、政府监管、研报社区、香港/澳门媒体与机构 ---- */
    { cat: "海外 AI 专业媒体", icon: "🌐", color: "#7c3aed",
      sites: [
        { name: "MIT Technology Review AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/", desc: "全球权威前沿技术趋势与产业深度" },
        { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence", desc: "AI 创业、融资、大厂收购与聚合平台动态" },
        { name: "VentureBeat AI", url: "https://venturebeat.com/category/ai/", desc: "企业级 AI、MaaS 平台商业化(极度推荐)" },
        { name: "The Verge AI", url: "https://www.theverge.com/ai-artificial-intelligence", desc: "消费级 AI 产品、大厂战略" },
        { name: "Ars Technica AI", url: "https://arstechnica.com/ai/", desc: "技术原理深度拆解" },
        { name: "Wired AI", url: "https://www.wired.com/tag/artificial-intelligence/", desc: "科技趋势宏观影响" },
        { name: "ZDNet AI", url: "https://www.zdnet.com/topic/artificial-intelligence/", desc: "企业 IT 落地实践" },
        { name: "Hacker News", url: "https://news.ycombinator.com/", desc: "极客前沿讨论风向标" },
        { name: "The Decoder", url: "https://the-decoder.com/", desc: "模型发布、定价调整更新及时" }
      ],
      wechat: ["The Information", "MIT Tech Review 中文", "机器之心(全球编译)"] },
    { cat: "海外财经与监管媒体", icon: "💹", color: "#2b5cff",
      sites: [
        { name: "Bloomberg Technology", url: "https://www.bloomberg.com/technology", desc: "AI 资本支出、电信运营商 AI 战略" },
        { name: "Reuters Technology", url: "https://www.reuters.com/technology/artificial-intelligence/", desc: "权威快讯、跨国合作公告" },
        { name: "Financial Times AI", url: "https://www.ft.com/artificial-intelligence", desc: "全球产业与监管影响" },
        { name: "WSJ Tech / AI", url: "https://www.wsj.com/tech/ai", desc: "商业深度报道、企业采用率" },
        { name: "CNBC Technology", url: "https://www.cnbc.com/technology/", desc: "科技板块动态、高管访谈" },
        { name: "a16z AI", url: "https://a16z.com/ai", desc: "顶级风投视角、商业化判断" },
        { name: "CB Insights", url: "https://www.cbinsights.com/research/", desc: "AI 市场地图、投融资" }
      ],
      wechat: ["Bloomberg", "Reuters", "FT 中文网"] },
    { cat: "海外政府与监管机构", icon: "🏛️", color: "#c81e1e",
      sites: [
        { name: "EU AI Act 官方", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", desc: "全球最严 AI 法案实施细则" },
        { name: "美国白宫 AI", url: "https://www.whitehouse.gov/ai/", desc: "美国 AI 行政命令/国家战略" },
        { name: "英国 AI Safety Institute", url: "https://www.aisi.gov.uk/", desc: "模型安全测试标准" },
        { name: "美国 NIST AI RMF", url: "https://www.nist.gov/artificial-intelligence", desc: "AI 风险管理框架" },
        { name: "OECD AI Policy Observatory", url: "https://oecd.ai", desc: "经合组织 AI 政策(60+ 国)" },
        { name: "新加坡 PDPC", url: "https://www.pdpc.gov.sg", desc: "东南亚数据合规/AI 治理" },
        { name: "美国 FTC AI", url: "https://www.ftc.gov/news-events/topics/protecting-consumers-artificial-intelligence", desc: "反垄断/消费者保护" }
      ],
      wechat: ["OECD AI", "EU AI Act 解读"] },
    { cat: "海外研报与开发者社区", icon: "📚", color: "#f2994a",
      sites: [
        { name: "Gartner AI", url: "https://www.gartner.com/en/topics/artificial-intelligence", desc: "技术成熟度曲线、魔力象限" },
        { name: "Forrester AI", url: "https://www.forrester.com/topics/artificial-intelligence", desc: "厂商评估、行业落地" },
        { name: "IDC AI", url: "https://www.idc.com/topics/artificial-intelligence", desc: "市场规模/份额统计" },
        { name: "McKinsey AI", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/artificial-intelligence", desc: "企业 AI 采纳与落地" },
        { name: "Hugging Face Blog", url: "https://huggingface.co/blog", desc: "开源模型与生态动态" },
        { name: "arXiv CS.AI / CL", url: "https://arxiv.org/list/cs.AI/recent", desc: "论文预印本前沿" },
        { name: "Papers with Code", url: "https://paperswithcode.com/", desc: "最新研究 + 代码" }
      ],
      wechat: ["Hugging Face", "The Gradient"] },
    { cat: "香港媒体与机构", icon: "🇭🇰", color: "#d6336c",
      sites: [
        { name: "南华早报 SCMP Tech", url: "https://www.scmp.com/tech", desc: "大湾区 AI 政策、跨国科技布局" },
        { name: "香港经济日报 HKET", url: "https://www.hket.com", desc: "内地与港澳 AI 合作、运营商算力" },
        { name: "信报财经新闻", url: "https://www.hkej.com", desc: "金融科技、AI 投资分析" },
        { name: "明报", url: "https://www.mingpao.com", desc: "创科、监管、社会应用" },
        { name: "香港 01", url: "https://www.hk01.com/zone/11", desc: "本地 AI 创业、政府项目" },
        { name: "香港数字政策办公室", url: "https://www.digitalpolicy.gov.hk", desc: "生成式 AI 监管、HKGAI" },
        { name: "香港科技园 HKSTP", url: "https://www.hkstp.org", desc: "AI 产业载体、生态" },
        { name: "数码港 Cyberport", url: "https://www.cyberport.hk", desc: "AI 创业生态、金融 AI 沙盒" },
        { name: "香港金融管理局 HKMA", url: "https://www.hkma.gov.hk", desc: "金融 AI 监管/沙盒" },
        { name: "个人资料私隐专员公署 PCPD", url: "https://www.pcpd.org.hk", desc: "数据隐私合规" }
      ],
      wechat: ["香港政府新闻网", "HKSTP", "Cyberport"] },
    { cat: "澳门媒体与机构", icon: "🇲🇴", color: "#0e9de0",
      sites: [
        { name: "澳门日报", url: "https://www.macaodaily.com", desc: "澳门特区政府 AI 政策、CTM 动态" },
        { name: "澳广视 TDM", url: "https://www.tdm.com.mo", desc: "智慧城市、数字政府" },
        { name: "Macau Business", url: "https://www.macaubusiness.com", desc: "科技产业、金融科技" },
        { name: "澳门经济及科技发展局", url: "https://www.dsedt.gov.mo", desc: "创科政策、AI 扶持" },
        { name: "澳门科学技术发展基金 FDCT", url: "https://www.fdct.gov.mo", desc: "AI 研发资助、产学研" },
        { name: "澳门生产力暨科技转移中心", url: "https://www.cpttm.org.mo", desc: "企业数字化、AI 落地" }
      ],
      wechat: ["澳门日报", "Macau Business"] },
    { cat: "海外/港澳官方博客", icon: "⚡", color: "#c76a15",
      sites: [
        { name: "OpenAI Blog", url: "https://openai.com/blog", desc: "GPT 系列、新架构首发" },
        { name: "Anthropic News", url: "https://www.anthropic.com/news", desc: "Claude 系列与前沿研究" },
        { name: "Google DeepMind Blog", url: "https://deepmind.google/blog", desc: "Gemini 系列技术发布" },
        { name: "Meta AI Blog", url: "https://ai.meta.com/blog/", desc: "Llama 系列发布" },
        { name: "AWS ML Blog", url: "https://aws.amazon.com/blogs/machine-learning/", desc: "Bedrock / 企业 AI" },
        { name: "NVIDIA Blog", url: "https://blogs.nvidia.com/blog/category/generative-ai/", desc: "算力与推理栈" },
        { name: "Together AI Blog", url: "https://www.together.ai/blog", desc: "开源推理云动态" },
        { name: "Anyscale Blog", url: "https://www.anyscale.com/blog", desc: "Ray 生态" },
        { name: "Replicate Blog", url: "https://replicate.com/blog", desc: "模型部署" },
        { name: "Fireworks AI Blog", url: "https://fireworks.ai/blog", desc: "推理优化" },
        { name: "OpenRouter Blog", url: "https://openrouter.ai/blog", desc: "聚合平台动态" }
      ],
      wechat: ["海外 AI 公司官方"] }
  ],
  intelDaily: { name: "微信公众号每日 AI 资讯(示例)", url: "https://mp.weixin.qq.com/s/JKpGPlIacwD5PAAM7vNpVg" },

  /* ================= 模块二:聚合平台功能对标 ================= */
  benchmark: {
    vendors: ["移动云 MoMA", "CMI AI Hub", "天翼云星辰MaaS", "秒云", "腾讯云 TokenHub", "OpenRouter", "硅基流动", "七牛云 AI", "Together AI", "Anyscale"],
    groups: [
      { group: "平台定位", metrics: [
        { m: "定位主张", cells: [
          "'五个统一'(认证/调度/SLA/运维/计费)的运营商级 MaaS 聚合平台",
          "面向出海/跨境企业的国际模型聚合与调度入口",
          "国资云 MaaS 平台(星辰自研+三方模型),Token 经营先行者",
          "云原生 AI 基础设施与模型服务交付商",
          "腾讯云生态内的模型聚合与 Token 分发服务",
          "全球最大模型聚合路由层(纯接入层)",
          "高性价比开源模型推理云",
          "双协议兼容的企业级模型聚合平台",
          "开源模型推理云 + GPU 算力服务",
          "Ray 生态企业级 AI 计算平台" ]},
        { m: "服务客群", cells: [
          "政企客户、行业大客户、个人开发者(分层套餐)",
          "出海企业、跨境业务客户、国际企业",
          "政企客户、行业客户、开发者",
          "成长型企业、私有化需求客户",
          "腾讯云存量客户、生态开发者",
          "全球开发者、AI 创业团队、研究型团队",
          "开发者、成本敏感型企业",
          "国内企业、Claude 生态迁移客户",
          "海外开发者、AI 原生企业",
          "需自建/托管推理的中大型企业" ]},
        { m: "服务模式", cells: [
          "按量 + 套餐 + 项目制,政企专线/代表处交付",
          "平台订阅 + 网络/算力/模型一站式打包",
          "按量 + Token Plan 套餐 + TPM 保障包 + 项目制",
          "SaaS + 私有化定制交付",
          "按量 + 资源包,云账号一体化",
          "纯按量充值(credits),自助服务",
          "按量 + 预留实例 + 私有化/BYOC",
          "按量 + 月度企业套餐",
          "按量 + 预留吞吐(PTU)+ 专属实例 + GPU 集群",
          "平台订阅 + 算力消耗计费" ]}
      ]},
      { group: "模型生态", metrics: [
        { m: "模型规模", cells: [
          "300+ 模型(官方宣称),自营+三方", "国际主流旗舰全覆盖(GPT/Claude/Gemini/Qwen/DeepSeek/豆包/视频/图像)",
          "星辰自研 + 主流三方模型(以官网为准)", "主流开源/商用模型(公开资料有限)",
          "混元系+三方主流模型", "400+ 模型 / 60+ 供应商", "120+ 模型(对话/生图/语音/视频)",
          "50+ 全球主流模型", "200+ 开源模型", "以自有/开源模型托管为主" ]},
        { m: "模型覆盖", cells: [
          "国产为主(九天/DeepSeek/通义/GLM/豆包/Kimi)+少量 LLaMA",
          "海外旗舰齐全(GPT-5.6 全系、Claude 4.x 全系、Gemini 3.1)+国产头部(DeepSeek-V4、Qwen3.7、豆包 Seed)+多模态",
          "国产为主(DeepSeek/GLM 设专项套餐)", "国产开源为主", "国产为主,混元首发",
          "海外全谱系+开源长尾微调", "国产开源为主+部分 Claude", "国产头部+部分海外",
          "Llama/DeepSeek/Qwen/GLM/Kimi 等开源", "开源模型为主" ]},
        { m: "上架时效", cells: [
          "主流新模型快速跟进(GLM-5.1 等已在架)", "国际新模型同步上架(GPT-5.6/Claude 4.8 已在架)",
          "主流模型跟进,套餐体系更新快", "跟随主流版本", "混元新模型首发",
          "新模型上架速度全球最快之一", "新开源模型快速上架(Kimi-K2.7 等已在架)", "头部模型同步上架",
          "开源新模型首发快", "以自托管版本为主" ]}
      ]},
      { group: "协议与接入", metrics: [
        { m: "API 协议", cells: [
          "自研 API,部分兼容 OpenAI", "OpenAI 兼容", "OpenAI 兼容(以官网为准)", "OpenAI 兼容", "OpenAI 兼容",
          "OpenAI 兼容,统一端点", "OpenAI 兼容", "OpenAI + Anthropic 双协议(国内唯一)",
          "OpenAI 兼容", "OpenAI 兼容(Endpoints)" ]},
        { m: "认证与接入", cells: [
          "移动云统一认证,主/子账号体系", "CMI mCloud 账号体系", "天翼云账号体系", "账号 + API Key",
          "腾讯云 CAM 权限体系", "单 Key + Workspaces 团队空间", "子账号体系",
          "七牛云账号体系", "团队账号管理", "企业账号 + VPC 接入" ]}
      ]},
      { group: "核心技术", metrics: [
        { m: "智能路由", cells: [
          "●●● 三策略智能路由(成本/效果/均衡)自动选模型", "●● 按区域/时延调度(跨境场景)",
          "●● 模型分发与调度", "● 基础负载均衡", "●● 按场景/产品分发",
          "●●● 自动路由+故障转移(成本/可用率)", "●● 推理加速调度", "●● 多模型切换",
          "●● 推理优化调度", "●● 自有集群调度" ]},
        { m: "性能与 SLA", cells: [
          "99.95% SLA(移动云底座),秒级容灾,推理提速约 42%", "依托 CMI 全球骨干网,跨境低时延,企业级保障",
          "TPM 包保障低延迟高并发(DeepSeek-V3 1 万/月、R1 2 万/月)", "以商务协议为准", "腾讯云标准 SLA,星脉网络加持",
          "无标准化 SLA,聚合层毫秒级开销", "99.9% SLA(商用版),宣称推理 10x 提速", "企业套餐保障,国内直连低延迟",
          "99.9% SLA,自研推理栈+PTU 预留吞吐", "企业版 SLA,RayTurbo 优化运行时" ]}
      ]},
      { group: "企业能力", metrics: [
        { m: "权限与账号", cells: [
          "政企账号体系,客户经理/代表处对接", "企业账号 + 客户经理贴身支持", "政企账号体系,属地化服务", "基础账号管理",
          "CAM 子账号/RBAC 成熟", "Workspaces 支出上限/成员管理(企业功能有限)", "子账号 + 用量告警",
          "企业子账号", "团队/成员管理", "企业 RBAC" ]},
        { m: "用量监测", cells: [
          "控制台 Token 明细可查,无隐形消费", "平台侧用量与账单管理", "平台计量 + 账单管理", "基础计量",
          "云监控 + 费用中心联动", "Token 级用量面板", "用量面板 + 告警",
          "Token 计量 + 积分账单", "用量面板", "平台监控" ]},
        { m: "安全治理", cells: [
          "机密容器+硬件隔离,全链路加密;机密模型服务(明文不上云)", "中港两地合规、数据跨境方案、全链路加密审计",
          "国资云安全合规体系", "私有化隔离部署", "腾讯安全体系、内容安全",
          "● 数据经境外转发,治理能力有限", "BYOC/私有化数据隔离", "国内合规、数据主权清晰",
          "专属实例隔离", "VPC/私有部署" ]},
        { m: "认证与采购", cells: [
          "政企采购链路、合同/发票完备,等保合规", "国际合规资质,中港双轨", "运营商政企采购链路、国资背景", "常规云安全认证",
          "腾讯云合规体系、发票", "无企业发票/SLA 承诺", "企业版合同/SLA", "等保合规、企业发票",
          "SOC2 等(以官网为准)", "企业合规(以官网为准)" ]}
      ]},
      { group: "体验与工具", metrics: [
        { m: "体验中心", cells: [
          "模型广场 + 体验中心(免费额度在线领取)", "模型广场在线查看规格与美元价格", "控制台体验", "控制台试用",
          "控制台在线体验", "Playground 全模型试玩", "在线体验 + API 调试",
          "在线体验 + 调试", "Playground", "托管控制台" ]},
        { m: "应用构建", cells: [
          "一键部署、智能体应用(移动云生态)", "以官网为准(待补充)", "星辰智能体生态", "定制化交付",
          "腾讯元器/知识引擎联动", "无(专注接入层)", "轻量应用层",
          "轻量应用层", "微调服务(LoRA $0.48/百万 tokens 起)+ Code Sandbox", "Ray 分布式训练/推理框架" ]}
      ]},
      { group: "计费与成本", metrics: [
        { m: "计费模式", cells: [
          "按量(元/百万 tokens)+ Coding Plan(40/200 元/月)+ 团队版(5,000 元/月)", "美元按量计价 + 一站式打包定价",
          "按量 + Token Plan(GLM 39.9-299.9、DeepSeek 9.9-49.9 元/月)+ TPM 包", "订阅 + 按量", "按量 + 资源包折扣",
          "credits 充值(5.5% 手续费)", "按量(低价)+ 预留实例", "按量 + Enterprise 套餐(2,999-9,999 元/月)",
          "按量(美元)+ PTU 预留吞吐 + 实例租赁", "算力消耗计费(美元)" ]},
        { m: "免费额度", cells: [
          "2500 万 tokens 限时 1 个月(自营模型)", "POC/体验支持(以商务为准)", "新客体验额度", "试用配额",
          "新客额度(混元 100 万 tokens)", "部分 :free 免费模型", "新客赠额 + 小模型免费(bge 系列免费)",
          "新客 300 万 tokens", "新客 credits", "试用额度" ]},
        { m: "特色资费", cells: [
          "上海试点 1 元=40 万 tokens 话费支付;机密模型包 392-56,000 元档", "跨境打包价,整体 TCO 优化",
          "TPM 包(确定性算力保障)为运营商首创", "定制报价", "资源包",
          "无套餐,纯按量", "预留实例锁定算力成本", "月付套餐无速率限制",
          "GPU 租赁 H100 $3.99/时起(长约 $3.09);微调服务", "企业年度协议" ]}
      ]},
      { group: "算力网络", metrics: [
        { m: "算力资源", cells: [
          "92.5 EFLOPS 智算,呼和浩特等资源池自营", "CMI 全球算力资源协同", "天翼云全国智算资源(息壤)", "第三方算力整合",
          "腾讯云星星海算力", "不持有算力(纯路由)", "自建 + 合作算力", "合作算力",
          "自有 GPU 集群(H100/H200/B200/GB200)", "客户自有云 + Anyscale 托管" ]},
        { m: "网络节点", cells: [
          "全国 30+ 节点,100% 省份覆盖,政企专线", "全球骨干网/POP 点,跨境低时延", "电信骨干网,属地化服务", "合作 IDC",
          "腾讯全球骨干网", "境外基础设施,国内访问需加速", "国内直连", "国内 CDN/直连",
          "北美/海外节点", "客户 VPC 内" ]}
      ]}
    ],
    summary: {
      "移动云 MoMA": "运营商级'五个统一'聚合平台:政企合规与算网资源最强,智能路由三策略+秒级容灾;海外模型覆盖与协议标准化是短板。",
      "CMI AI Hub": "跨境模型聚合入口:国际旗舰模型齐全(文本/视频/图像全模态)、美元同价、中港合规;差异化在'网络+合规+一站式',应用工具链待补齐。",
      "天翼云星辰MaaS": "国资云 Token 经营标杆:套餐/TPM 包分层最细,政企渠道强;模型生态与开发者体验弱于互联网平台。",
      "秒云": "轻量化云原生交付,适合私有化项目;平台化能力与模型生态公开信息有限。",
      "腾讯云 TokenHub": "依托腾讯云生态,企业账号/监控/安全体系成熟;本质是大云厂商模型服务,跨厂商聚合广度有限。",
      "OpenRouter": "模型广度与路由能力全球第一,适合探索与评测;无 SLA、无企业治理、数据出境,生产级 toB 慎用。",
      "硅基流动": "开源推理性价比之王,预留实例+私有化补齐生产级能力;缓存命中价极低,海外旗舰覆盖有限。",
      "七牛云 AI": "国内唯一 OpenAI+Anthropic 双协议,月套餐成本可控;模型规模中等,路由能力一般。",
      "Together AI": "'模型 API+PTU+GPU 集群+微调'全栈最完整,开源模型首发快;面向海外,国内企业采购与合规链路长。",
      "Anyscale": "Ray 分布式框架护城河深,适合自建推理的企业;不是标准聚合平台,接入成品模型选择少。"
    },
    radarDims: ["模型生态", "智能路由", "企业治理", "安全合规", "成本灵活性", "算力网络"],
    radarScores: {
      "移动云 MoMA":      [4, 4, 5, 5, 4, 5],
      "CMI AI Hub":       [5, 4, 4, 5, 4, 5],
      "天翼云星辰MaaS":   [3, 3, 5, 5, 4, 5],
      "秒云":             [3, 2, 3, 3, 3, 3],
      "腾讯云 TokenHub":  [4, 3, 4, 4, 3, 4],
      "OpenRouter":       [5, 5, 2, 2, 4, 2],
      "硅基流动":         [4, 3, 3, 4, 5, 4],
      "七牛云 AI":        [4, 3, 4, 4, 5, 3],
      "Together AI":      [4, 3, 3, 3, 4, 5],
      "Anyscale":         [3, 3, 4, 4, 3, 4]
    }
  },

  /* ================= 模块三:价格及商业模式对标 ================= */
  business: {
    vendors: ["移动云 MoMA", "CMI AI Hub", "天翼云星辰MaaS", "腾讯云 TokenHub", "OpenRouter", "硅基流动", "七牛云 AI", "DMXAPI", "Together AI", "Novita AI"],
    dims: ["核心盈利模式", "计费模式", "免费与入门", "套餐体系", "加价率/手续费", "缓存折扣", "批量/承诺折扣", "增值收入", "最低消费", "SLA 与商务保障", "发票与采购"],
    cells: {
      "核心盈利模式": ["Token 按量 + 套餐订阅 + 项目集成", "跨境打包(网络+算力+模型)价差", "Token 转售 + 云资源带动", "Token 分销 + 云生态带动", "充值手续费 + 价差", "推理服务费 + 预留实例 + 私有化", "按量 + 月度企业套餐", "折扣聚合(低于官网价的走量价差)", "模型 API + GPU 算力 + 微调", "低价模型 API + GPU 云 + 多模态生成"],
      "计费模式": ["按量(元/百万 tokens)+ 订阅 + 项目制", "美元按量 + 打包定价", "按量 + Token Plan + TPM 保障包", "按量 + 资源包", "credits 纯按量", "按量 + 预留实例 + BYOC", "按量 + 月套餐(积分制)", "按量,分组倍率 4.8-9.5 折", "按量(美元)+ PTU + 实例租赁", "美元按量 + Batch 5 折"],
      "免费与入门": ["2500 万 tokens 限时 1 个月(自营)", "POC/体验支持(商务申请)", "新客体验额度", "新客额度(混元 100 万)", "部分 :free 免费模型", "新客赠额 + bge 等免费模型", "新客 300 万 tokens", "多款免费模型(限流,如 kimi-k2.7-code-free)", "新客 credits", "Ling-3.0-flash 等免费模型"],
      "套餐体系": ["Coding Plan 40/200 元/月;团队版 5,000 元/月;上海试点 1 元=40 万 tokens", "一站式打包(按方案定制)", "Coding Plan 49/149/469 元/月;Token Plan:GLM 39.9-299.9、DeepSeek 9.9-49.9 元/月;TPM 包 V3 1 万/月、R1 2 万/月", "资源包折扣", "无套餐", "预留实例(锁定算力)", "Enterprise S/M/B:2,999/4,999/9,999 元/月(约 10-50 亿积分)", "无月套餐,纯折扣按量", "承诺消费折扣 + 预留吞吐", "Batch API 5 折"],
      "加价率/手续费": ["整体宣称低于行业均价约 30%", "与官方美元价基本持平", "未公开", "未公开", "充值 5.5% 手续费", "低加价走量(缓存命中价极低)", "低加价,套餐摊薄", "反向定价:普遍低于官网(qwen3.5-plus 5 折、deepseek-v4-pro 8.5 折)", "接近上游成本价 + 算力收益", "低价策略(多款为全渠道最低之一)"],
      "缓存折扣": ["—(待补充)", "—(待补充)", "—(待补充)", "支持(混元系)", "透传上游缓存价", "缓存命中价低至 0.1 折档(如 V4-Flash 0.02 元)", "支持", "透传 + 折上折", "cached 价约为输入 15-20%", "Cache Read 为输入 20-50%"],
      "批量/承诺折扣": ["大客户框架协议;机密模型包 392-56,000 元档", "企业协议折扣", "TPM 包保障确定性算力", "资源包", "无", "预留实例即承诺折扣", "套餐无速率限制", "—(待补充)", "GPU 长约最高降 23%(181 天)", "Batch 输入输出 5 折"],
      "增值收入": ["集成、运维、机密模型服务、专线", "跨境专线、合规审计、贴身运维", "云网资源带动、智能体应用", "生态服务联动", "无", "私有化部署、SLA、推理加速服务", "企业套餐服务", "Claude Code 专用(-cc)与官方直连(-guan)通道", "微调(LoRA $0.48/M 起)、Code Sandbox、存储", "GPU 租赁、图像/视频/语音生成"],
      "最低消费": ["个人 15 元/月起;团队版 5,000 元/月", "按方案定制", "套餐 9.9 元/月起", "无硬性门槛", "无(充值即用)", "无;预留实例有门槛", "无;企业套餐月费制", "无", "无(按量);租赁/微调有最低消费(微调 $4 起)", "无"],
      "SLA 与商务保障": ["99.95%(移动云底座)+秒级容灾", "企业级 SLA(商务协议)", "TPM 包保障低延迟高并发", "腾讯云标准 SLA", "无标准化 SLA", "99.9%(商用版)", "企业套餐保障", "以官网为准", "99.9%", "以官网为准"],
      "发票与采购": ["政企采购链路、合同/发票完备", "国际商务体系、支持中港双轨", "运营商政企采购体系", "腾讯云采购体系", "无企业发票", "企业版合同/发票", "企业发票", "以官网为准", "美元结算、海外采购", "美元结算"]
    }
  },

  /* 价格对标矩阵:模型 × 厂商;单位见单元格(¥=元/百万 tokens,$=美元/百万 tokens);— 为未上架/未公开 */
  pricing: {
    vendors: ["官方原厂", "移动云 MoMA", "CMI AI Hub", "OpenRouter", "硅基流动", "DMXAPI", "Together AI", "Novita AI"],
    rows: [
      { model: "DeepSeek-V4-Pro", ctx: "1024K", note: "旗舰 MoE 1.6T", cells: {
        "CMI AI Hub": "$1.53 / $3.06", "硅基流动": "¥12 / 24(缓存 0.1)", "DMXAPI": "¥2.55 / 5.1(8.5 折)", "Together AI": "$1.74 / $3.48", "Novita AI": "$1.60 / $3.20(缓存 0.135)", "OpenRouter": "透传上游价", "官方原厂": "见 DeepSeek 官网", "移动云 MoMA": "—" } },
      { model: "DeepSeek-V4-Flash", ctx: "1024K", note: "高并发轻量", cells: {
        "CMI AI Hub": "$0.167 / $0.449", "硅基流动": "¥1 / 2(缓存 0.02)", "DMXAPI": "¥0.79 / 1.58(7.9 折)", "Novita AI": "$0.14 / $0.28(缓存 0.028)", "OpenRouter": "透传上游价", "官方原厂": "见 DeepSeek 官网", "移动云 MoMA": "—", "Together AI": "—" } },
      { model: "DeepSeek-V3.2", ctx: "256K", note: "稀疏注意力正式版", cells: {
        "CMI AI Hub": "$0.51 / $1.48", "硅基流动": "¥4 / 6(缓存 0.4)", "DMXAPI": "¥1.58 / 2.37(7.9 折)", "Novita AI": "$0.269 / $0.40(缓存 0.135)", "官方原厂": "见 DeepSeek 官网", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "Together AI": "—" } },
      { model: "DeepSeek-V3", ctx: "128K", note: "官方直调最低", cells: {
        "官方原厂": "¥0.14 / 0.28(缓存 0.0028)", "移动云 MoMA": "¥2 / 8", "OpenRouter": "透传上游价", "CMI AI Hub": "—", "硅基流动": "—", "DMXAPI": "—", "Together AI": "—", "Novita AI": "—" } },
      { model: "DeepSeek-R1", ctx: "320K", note: "推理模型", cells: {
        "移动云 MoMA": "¥4 / 16", "CMI AI Hub": "$1.188 / $4.752", "Novita AI": "$0.70 / $2.50(0528 版)", "DMXAPI": "¥4 / 16(官方直连无折扣)", "官方原厂": "见 DeepSeek 官网", "OpenRouter": "透传上游价", "硅基流动": "—", "Together AI": "—" } },
      { model: "GLM-5.2", ctx: "1M", note: "智谱最新旗舰", cells: {
        "硅基流动": "¥8 / 28(缓存 2)", "Together AI": "$1.40 / $4.40(缓存 0.26)", "Novita AI": "$1.40 / $4.40(缓存 0.26)", "官方原厂": "见智谱官网", "移动云 MoMA": "—", "CMI AI Hub": "—", "OpenRouter": "透传上游价", "DMXAPI": "—" } },
      { model: "GLM-5.1", ctx: "200K", note: "MoMA 与官方同价", cells: {
        "移动云 MoMA": "¥6 / 24(32K 以上档 8 / 28)", "硅基流动": "¥6 / 24(Pro 同价,缓存 1.3)", "Together AI": "$1.40 / $4.40", "Novita AI": "$1.38 / $4.40", "官方原厂": "见智谱官网", "CMI AI Hub": "—", "OpenRouter": "透传上游价", "DMXAPI": "—" } },
      { model: "Kimi-K2.6", ctx: "256K", note: "Novita 渠道最低", cells: {
        "官方原厂": "¥6.5 / 27(缓存 1.1)", "硅基流动": "¥6.5 / 27(缓存 1.1)", "Together AI": "$1.20 / $4.50(缓存 0.20)", "Novita AI": "$0.80 / $3.40(缓存 0.16)", "移动云 MoMA": "—", "CMI AI Hub": "—", "OpenRouter": "透传上游价", "DMXAPI": "—" } },
      { model: "Qwen3.7-Max", ctx: "1000K", note: "阿里旗舰", cells: {
        "DMXAPI": "¥11.4 / 34.2(原价 ¥12/36,9.5 折)", "CMI AI Hub": "$2.575 / $7.725", "Together AI": "$1.25 / $3.75(缓存 0.13)", "Novita AI": "$1.25 / $3.75(缓存 0.25)", "官方原厂": "见百炼定价页", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "硅基流动": "—" } },
      { model: "Qwen3.7-Plus", ctx: "1000K", note: "高性价比多模态", cells: {
        "CMI AI Hub": "$0.412 / $1.648", "DMXAPI": "¥1.58 / 6.32(原价 ¥2/8,7.9 折)", "Together AI": "$0.32 / $1.28", "官方原厂": "见百炼定价页", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "硅基流动": "—", "Novita AI": "—" } },
      { model: "Qwen3.5-Plus", ctx: "1000K", note: "DMXAPI 5 折最低", cells: {
        "官方原厂": "¥0.8 / 4.8(原价)", "DMXAPI": "¥0.4 / 2.4(5 折)", "CMI AI Hub": "$0.412 / $2.472", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "硅基流动": "—", "Together AI": "—", "Novita AI": "—" } },
      { model: "Qwen3.5-397B-A17B", ctx: "256K", note: "旗舰开源 MoE", cells: {
        "硅基流动": "¥1.2 / 7.2(≤128K 档)", "DMXAPI": "¥0.4 / 2.4(5 折)", "Together AI": "$0.60 / $3.60(缓存 0.35)", "Novita AI": "$0.60 / $3.60", "官方原厂": "开源免费(自托管)", "移动云 MoMA": "—", "CMI AI Hub": "—", "OpenRouter": "透传上游价" } },
      { model: "Qwen3.5-35B-A3B", ctx: "256K", note: "轻量 MoE", cells: {
        "移动云 MoMA": "¥0.4 / 3.2(128K 以上档 1.6 / 12.8)", "硅基流动": "¥0.4 / 3.2(≤128K 档)", "DMXAPI": "¥0.2 / 1.6(5 折)", "Novita AI": "$0.25 / $2.00", "CMI AI Hub": "$0.386 / $2.318(3.6 版)", "官方原厂": "开源免费(自托管)", "OpenRouter": "透传上游价", "Together AI": "—" } },
      { model: "MiniMax-M3", ctx: "1M", note: "Agent 原生 MoE", cells: {
        "DMXAPI": "¥1.869 / 7.476(原价 ¥2.1/8.4,8.9 折)", "Together AI": "$0.30 / $1.20(缓存 0.06)", "官方原厂": "见 MiniMax 官网", "移动云 MoMA": "—", "CMI AI Hub": "—", "OpenRouter": "透传上游价", "硅基流动": "—", "Novita AI": "—" } },
      { model: "MiniMax-M2.5", ctx: "128K", note: "MoMA/硅基/CMI 同价", cells: {
        "移动云 MoMA": "¥2.1 / 8.4", "硅基流动": "¥2.1 / 8.4(缓存 0.21)", "CMI AI Hub": "$0.2418 / $0.9672", "Novita AI": "$0.30 / $1.20", "官方原厂": "见 MiniMax 官网", "OpenRouter": "透传上游价", "DMXAPI": "—", "Together AI": "—" } },
      { model: "Claude Opus 4.8", ctx: "1000K", note: "海外旗舰,CMI 同价", cells: {
        "官方原厂": "$5.25 / $26.25", "CMI AI Hub": "$5.25 / $26.25(与官方同价)", "OpenRouter": "透传官方价", "移动云 MoMA": "—", "硅基流动": "—", "DMXAPI": "—", "Together AI": "—", "Novita AI": "—" } },
      { model: "Claude Sonnet 4.6", ctx: "200K", note: "海外中坚", cells: {
        "官方原厂": "$2.91 / $14.55", "CMI AI Hub": "$2.91 / $14.55(与官方同价)", "OpenRouter": "透传官方价", "移动云 MoMA": "—", "硅基流动": "—", "DMXAPI": "—", "Together AI": "—", "Novita AI": "—" } },
      { model: "GPT-5.6 Terra / Sol", ctx: "1024K", note: "海外旗舰,CMI 同价", cells: {
        "官方原厂": "Terra $2.2 / $13.2;Sol $4.4 / $26.4", "CMI AI Hub": "与官方同价", "OpenRouter": "透传官方价", "移动云 MoMA": "—", "硅基流动": "—", "DMXAPI": "—", "Together AI": "—", "Novita AI": "—" } },
      { model: "GPT-OSS-120b(开源)", ctx: "128K", note: "Novita 渠道最低", cells: {
        "Novita AI": "$0.05 / $0.25", "CMI AI Hub": "$0.095 / $0.475", "Together AI": "$0.15 / $0.60", "官方原厂": "开源免费(自托管)", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "硅基流动": "—", "DMXAPI": "—" } },
      { model: "Llama-4-Maverick", ctx: "1000K", note: "Meta 开源旗舰", cells: {
        "CMI AI Hub": "$0.22 / $0.88", "Novita AI": "$0.27 / $0.85", "官方原厂": "开源免费(自托管)", "移动云 MoMA": "—", "OpenRouter": "透传上游价", "硅基流动": "—", "DMXAPI": "—", "Together AI": "—" } }
    ],
    mmRows: [
      { model: "Veo 3.1(视频)", unit: "美元/秒", cells: { "CMI AI Hub": "$0.18(视频)/ $0.36(含音频)", "Novita AI": "—", "DMXAPI": "—", "硅基流动": "—", "官方原厂": "见 Google 官网" } },
      { model: "Wan2.7-T2v(文生视频)", unit: "美元/秒", cells: { "CMI AI Hub": "$0.1545 / 秒", "DMXAPI": "¥0.6 / 秒(720P)、¥1 / 秒(1080P)", "官方原厂": "见百炼定价页", "Novita AI": "—", "硅基流动": "—" } },
      { model: "Seedance-1.5-Pro(视频)", unit: "美元/百万 tokens", cells: { "CMI AI Hub": "$1.14(视频)/ $2.28(含音频)", "官方原厂": "见火山引擎", "Novita AI": "—", "DMXAPI": "—", "硅基流动": "—" } },
      { model: "Kling v1.6 i2v(视频)", unit: "美元/个", cells: { "Novita AI": "$0.27(5s 720P)/ $0.54(10s)", "官方原厂": "见快影官方", "CMI AI Hub": "—", "DMXAPI": "—", "硅基流动": "—" } },
      { model: "Wan2.2-I2V/T2V-A14B(视频)", unit: "元/个", cells: { "硅基流动": "¥2 / 个", "官方原厂": "开源免费(自托管)", "CMI AI Hub": "—", "DMXAPI": "—", "Novita AI": "—" } },
      { model: "Qwen-Image(文生图)", unit: "美元/张", cells: { "CMI AI Hub": "$0.036 / 张", "硅基流动": "¥0.30 / 张", "DMXAPI": "¥0.25 / 张", "Novita AI": "$0.02 / 张", "官方原厂": "见百炼定价页" } },
      { model: "Seedream-4.5(图像)", unit: "美元/张", cells: { "CMI AI Hub": "$0.038 / 张", "官方原厂": "见火山引擎", "Novita AI": "—", "DMXAPI": "—", "硅基流动": "—" } },
      { model: "Z-Image-Turbo(图像)", unit: "元/张", cells: { "硅基流动": "¥0.10 / 张", "DMXAPI": "¥0.10-0.20 / 张", "官方原厂": "见通义官网", "CMI AI Hub": "—", "Novita AI": "—" } },
      { model: "GPT-Image-1(图像)", unit: "美元/百万 tokens", cells: { "CMI AI Hub": "输入 $4.4(文本)/ $8.8(图片),输出 $35.2", "官方原厂": "见 OpenAI 官网", "Novita AI": "—", "DMXAPI": "—", "硅基流动": "—" } }
    ],
    findings: [
      { title: "国产旗舰:官方/原厂直调或折扣聚合最低", desc: "DeepSeek-V3 官方 0.14/0.28 元为全渠道最低;DeepSeek-V4-Pro 经 DMXAPI 8.5 折后(2.55/5.1 元)低于硅基流动(12/24 元);Qwen3.5-Plus 经 DMXAPI 5 折(0.4/2.4 元)为国产模型最低档 —— 折扣聚合平台正在改写价格锚点。" },
      { title: "Kimi-K2.6、GPT-OSS-120b:Novita 全渠道最低", desc: "Kimi-K2.6 在 Novita($0.80/$3.40)低于官方与硅基(¥6.5/27);GPT-OSS-120b 在 Novita($0.05/$0.25)同样最低 —— 开源/海外托管模型的价格洼地在美国二线推理云。" },
      { title: "MoMA:GLM-5.1 与官方同价,运营商走'同价+服务'路线", desc: "GLM-5.1 在 MoMA(6/24 元)与硅基一致;MiniMax-M2.5 在 MoMA/硅基/CMI 三家同价 —— 头部模型在各渠道价格趋同,竞争转向服务与治理。" },
      { title: "海外旗舰:CMI AI Hub 与官方美元同价", desc: "Claude Opus 4.8($5.25/$26.25)、GPT-5.6 等在 CMI 与官方价一致,省去境外支付/合规/网络成本,是跨境调用的价格锚点;OpenRouter 为透传价+5.5% 充值手续费。" },
      { title: "成本优化组合拳已成行业标配", desc: "缓存命中价(硅基低至 0.02 元/百万)、批量 5 折(Novita Batch)、预留吞吐(Together PTU、天翼 TPM 包)、分段计价(长上下文加价)—— 平台需同时具备四类机制才有成本竞争力。" }
    ]
  },

  /* ================= 模块四:差异化定位 ================= */
  differentiation: [
    { title: "网络层差异化", desc: "依托中信国际电讯全球骨干网,提供跨境低时延 AI 调用,解决出海企业网络痛点。", icon: "🌐" },
    { title: "安全合规差异化", desc: "融合中港两地合规资质,提供数据跨境合规方案、全链路加密与审计能力。", icon: "🛡️" },
    { title: "行业场景差异化", desc: "聚焦金融、跨境电商、制造业等优势行业,预装行业模型与知识库模板。", icon: "🏭" },
    { title: "服务模式差异化", desc: "提供'网络 + 算力 + 模型 + 运维'一站式打包服务,客户经理贴身支持。", icon: "🤝" }
  ],
  priorities: [
    { level: "P0", name: "共性必做功能", color: "#2b5cff", items: ["统一 API 网关", "模型市场", "Token 计量计费", "调用监控", "多租户管理"] },
    { level: "P1", name: "竞争必备功能", color: "#00b3a4", items: ["智能路由(成本/效果)", "故障自动切换", "缓存优化", "成本分析看板"] },
    { level: "P2", name: "差异化亮点", color: "#f2994a", items: ["跨境网络加速", "多区域容灾", "合规审计报告", "行业解决方案包", "混合部署调度"] }
  ],
  architecture: [
    { layer: "应用层", en: "Application", items: ["模型广场", "开发工具", "Agent 框架", "行业模板"], color: "#7c3aed" },
    { layer: "管控层", en: "Management", items: ["计量计费", "监控告警", "运营分析", "安全审计"], color: "#f2994a" },
    { layer: "模型层", en: "Model", items: ["多模型适配", "推理引擎", "缓存加速"], color: "#00b3a4" },
    { layer: "调度层", en: "Scheduling", items: ["智能路由", "负载均衡", "故障容灾"], color: "#2b5cff" },
    { layer: "接入层", en: "Access", items: ["统一 API 网关", "鉴权", "限流"], color: "#0e9de0" }
  ]
};
