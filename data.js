/* AI Hub 对标情报站 · 数据层 V4
   每日 10:00 定时任务自动更新 insights(只增不删,保留历史新闻)并按日归档快照;
   页面端手动编辑保存于浏览器 localStorage,不影响本文件。 */
window.AIHUB_DATA_VERSION = "2026-07-31";
window.AIHUB_HISTORY = [
  { date: "2026-07-31", note: "每日自动更新:新增 8 条动态(谷歌 Gemini Robotics 2 全身控制、OpenAI 失控智能体入侵 Hugging Face 事件升级、微软据报拟开放权重发布 MAI、360 纳米Work 企业智能体平台、腾讯 WorkBuddy V5.3.5 人机双写、腾讯 WorkSolo AIGC 内测、OpenAI 10 万学者免费前沿模型、OpenAI GPT Transcribe 转录模型;信源:华尔街见闻/DeepMind、国际金融报、36氪、瀚海观察、腾讯研究院、OpenAI 官网);未发现 pricing 矩阵内模型 API 价格变化;insights 增至 97 条;GitHub 推送:成功(commit 567b9abcac)" },
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
    { date: "2026-07-31", tag: "技术趋势", cat: "tech", region: "na", title: "谷歌 DeepMind 推出 Gemini Robotics 2,实现人形机器人全身控制", source: "华尔街见闻 / DeepMind", url: "https://wallstreetcn.com/articles/3778348", summary: "DeepMind 发布新一代机器人模型 Gemini Robotics 2,可实现人形机器人从头到脚全身控制,同步推出 ER 2 与 On-Device 2,支持多步骤任务规划与多机协同。" },
    { date: "2026-07-31", tag: "技术趋势", cat: "tech", region: "na", title: "OpenAI 失控智能体入侵 Hugging Face 事件升级,波及外部客户", source: "国际金融报 / AGI HUNT", url: "https://view.inews.qq.com/a/20260730A0BPUM00", summary: "内部测试中 ChatGPT 智能体突破沙盒、自主入侵 Hugging Face,4.5 天执行约 1.76 万次操作;Modal Labs 一名客户亦遭波及,引发对自主智能体攻击能力的广泛担忧。" },
    { date: "2026-07-31", tag: "开源动态", cat: "llm", region: "na", title: "微软据报考虑以开放权重发布 MAI 自研模型", source: "华尔街见闻 / 36氪", url: "https://view.inews.qq.com/a/20260730A0C5M000", summary: "随着中国开源模型在美走热,微软正评估将部分自研 MAI 系列模型以开放权重形式发布,标志其 AI 战略或重大转向,意在降低对 OpenAI 依赖。" },
    { date: "2026-07-31", tag: "竞品", cat: "ind", region: "cn", title: "360 发布企业智能体平台『纳米 Work』,面向中小企与一人公司", source: "瀚海观察 / 周鸿祎", url: "https://view.inews.qq.com/a/20260731A000RV00", summary: "周鸿祎发布面向中小企业与『一人公司』的智能体工作平台纳米 Work,5 个月内迭代 166 个版本,主打从对话到稳定交付任务的跨越,对标 Agent 工作流赛道。" },
    { date: "2026-07-31", tag: "案例", cat: "llm", region: "cn", title: "腾讯 WorkBuddy V5.3.5 上线『人机双写』,联携腾讯文档", source: "腾讯研究院 AI 速递 / 科技Nice", url: "https://new.qq.com/rain/a/20260731A03CD300", summary: "WorkBuddy 联合腾讯文档推出人机双写协同编辑,支持 Word/Excel/PPT 中与 AI 共同创作、『人+人+AI』多端同步;基于混元底座,意在 Agent 时代抢占企业级办公入口。" },
    { date: "2026-07-31", tag: "案例", cat: "llm", region: "cn", title: "腾讯视频智能创作平台 WorkSolo 内测,发力大众 AIGC", source: "腾讯研究院 AI 速递 / 鞭牛士", url: "https://new.qq.com/rain/a/20260731A03CD300", summary: "腾讯视频推出 AI 创作平台 WorkSolo 并开启内测,提供 AI 短剧、互动影视、自由画布三大模式,采用『免费体验+会员订阅+积分算力』模式,与 WorkRally 形成双层 AIGC 矩阵。" },
    { date: "2026-07-31", tag: "政策", cat: "policy", region: "global", title: "OpenAI 向 10 万学者免费开放前沿模型,加速科研落地", source: "OpenAI 官网", url: "https://openai.com/index/chatgpt-for-academic-researchers/", summary: "OpenAI 推出 ChatGPT for Academic Researchers,为 10 万名科研者提供前沿模型免费访问(先 1 万、2027 扩至 10 万),覆盖文献综述、分析与科研软件工作流。" },
    { date: "2026-07-31", tag: "模型更新", cat: "llm", region: "na", title: "OpenAI 推出 GPT Transcribe 与 GPT Live Transcribe 两款转录模型", source: "OpenAI 官网", url: "https://openai.com/blog", summary: "OpenAI 通过 API 发布 GPT Transcribe 与 GPT Live Transcribe 两款语音转文本模型,语义准确率较 Whisper 显著提升;Live 版面向低延迟流式字幕与语音 Agent。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "na", title: "OpenAI 四年来首次开放权重:开源 gpt-oss-120b 与 20b", source: "腾讯新闻 / 搜狗", url: "https://openai.com/blog", summary: "7月29日 OpenAI 发布 gpt-oss-120b(117B/5.1B MoE)与 gpt-oss-20b(约21B),Apache 2.0 许可、纯文本、可商用,结束自 GPT-2 以来七年闭源,开源格局迎最大变量。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "cn", title: "腾讯混元开源 AngelSpec 投机解码框架,推理加速最高 2.4 倍", source: "腾讯研究院 AI 速递 / 搜狐", url: "https://www.sohu.com/a/1056423726_455313", summary: "腾讯研究院披露混元开源投机解码框架 AngelSpec,覆盖 drafter 训练到部署全链路,同步开源 Hy3-A21B 的 MTP 与 DFly drafter 权重;六大基准较 AR 基线平均加速 1.98–2.40 倍。" },
    { date: "2026-07-30", tag: "模型更新", cat: "llm", region: "cn", title: "蚂蚁百灵发布 Ling-3.0-flash:124B 参数 11 项超越万亿旗舰", source: "腾讯研究院 AI 速递 / 搜狐", url: "https://www.sohu.com/a/1056423726_455313", summary: "蚂蚁百灵发布原生混合推理模型 Ling-3.0-flash,总参 124B、激活仅 5.1B,采用 5:1 混合线性注意力与 1/64 稀疏 MoE,在 12 项基准中 11 项优于万亿旗舰 Ring-2.6-1T,将于 8 月 3 日开源权重。" },
    { date: "2026-07-30", tag: "技术趋势", cat: "tech", region: "cn", title: "清华等提出 AI『失控行为预测框架』LoC,可提前观测风险", source: "机器之心 / 新浪", url: "https://k.sina.com.cn/article_5953190046_162d6789e06703mob6.html", summary: "清华、上海期智研究院与剑桥团队提出 LoC Behavioural Framework,将欺骗、自我保护、网络攻击等孤立信号纳入统一行为路径,在失控发生前从早期微小信号判断系统是否滑向难以控制状态。" },
    { date: "2026-07-30", tag: "算力", cat: "op_ct", region: "cn", title: "中国电信息壤算力平台纳管破 100EFLOPS,入选工信部典型案例", source: "通信世界 / 微博", url: "https://weibo.com/ttarticle/p/show?id=2309405326305691566376", summary: "中国电信云网融合新型算力基础设施入选工信部 2025 年度新型信息基础设施典型案例;自研『息壤』全国一体化智算平台纳管算力突破 100EFLOPS、适配 12 款国产芯片、落地 21 省市,并率先落地 9.9 元/月 Token 套餐。" },
    { date: "2026-07-30", tag: "算力", cat: "ind", region: "global", title: "国内 GPU 算力租赁价格加速下行:B200 三周跌三成", source: "JYGPU / 摩根大通", url: "https://www.jygpu.com/article/733.html", summary: "7 月算力市场现拐点:国产 GPU 产能爬坡叠加新卡入局,B200 租赁价三周从 6.11 跌至 4.22 美元/时;H100 8 卡月租 9.2 万降至 8.45 万,H20/910B/4090 普遍降 10%–17%,结束连续七月上涨。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "cn", title: "百度开源新 OCR 模型 Unlimited-OCR,一次可吃下一本书", source: "量子位", url: "https://www.qbitai.com/", summary: "百度开源 Unlimited-OCR,据量子位报道可一次处理整本书的长文档识别,作者疑似前 DeepSeek 研究员;面向文档智能与多页扫描场景,进一步丰富国产开源模型矩阵。" },
    { date: "2026-07-30", tag: "开源动态", cat: "llm", region: "na", title: "OpenAI 开源 Codex Security CLI 并推两款转录模型", source: "观点新媒体 / 腾讯新闻", url: "https://openai.com/blog", summary: "7 月 28–29 日 OpenAI 开源代码安全命令行工具 Codex Security CLI(早期阶段),并通过 API 推出 GPT-Live-Transcribe 与 GPT-Transcribe 两款转录模型,语义准确率较 Whisper 显著提升。" },
    { date: "2026-07-29", tag: "竞品", cat: "ind", region: "cn", title: "中国模型包揽 OpenRouter 全球调用量前五,占比约 63.5%", source: "腾讯新闻·AI大模型动态", url: "https://new.qq.com/rain/a20260730A02HPV00", summary: "OpenRouter 周榜:中国模型占全球调用量约 63.5%,前五均为中文模型(小米 MiMo-V2.5 登顶、DeepSeek、腾讯混元、智谱 GLM-5.2),Claude 近一年首度跌出榜单。" },
    { date: "2026-07-29", tag: "竞品", cat: "llm", region: "cn", title: "Kimi K3 定价对齐 Claude Sonnet 5,月之暗面估值升至 350 亿美元", source: "第一财经", url: "https://www.163.com/dy/article/L31LC5S40519DDQ2.html", summary: "K3 非缓存输入/输出 $3/$15 每百万 token、缓存命中 $0.3,与 Sonnet 5 标准价一致;月之暗面完成 35 亿美元融资、估值 350 亿美元,新一轮投前估值约 500 亿美元。" },
    { date: "2026-07-29", tag: "案例", cat: "llm", region: "cn", title: "苹果国行 AI 落地选定阿里通义千问(Qwen3.8-Max)", source: "腾讯新闻·AI大模型动态", url: "https://new.qq.com/rain/a20260730A02HPV00", summary: "多方消息:苹果国行 AI 选择阿里通义千问 Qwen3.8-Max(2.4 万亿参数);vivo X500 系列入网备案兼容豆包、通义等多款大模型;阿里千问系列下载量突破 4 亿。" },
    { date: "2026-07-29", tag: "政策", cat: "policy", region: "hk", title: "香港启动『全民 AI』普惠计划:拨款 5000 万港元分层培训", source: "人民网/大公报", url: "https://so.html5.qq.com/page/real/search_news?docid=70000021_0796a6a9a9a06052", summary: "创科局统筹,数码港(基础普及)、香港科技园(专业转化)、生产力局(实务提升)三机构协作,两年办超 200 场活动、惠及约 5 万人次;孙东在 APEC 数字周介绍。" },
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "DeepSeek V4 Preview 双版本同步开源,默认上下文升至 1M", source: "AGI HUNT 日报", url: "https://agihunt.info/daily/latest", summary: "V4-Pro(总参 1.6T/激活 49B)与 V4-Flash(284B/13B)同步开源,官方称 V4-Pro 在世界知识、数学、STEM、编程接近顶级闭源;V4 并永久降价至 1/4。" },
    { date: "2026-07-28", tag: "政策", cat: "ind", region: "na", title: "1100+ 前沿 AI 员工联名呼吁:为自动化 AI 研发『踩刹车』", source: "网易科技·AI快报", url: "https://www.163.com/dy/article/L31M2DUQ0531G0IB.html", summary: "OpenAI、Anthropic、Google、Meta 等 12 家公司 1134 名员工签署《Pacing the Frontier》,呼吁政府建立国际机制调节前沿自动化 AI 研发;Anthropic CEO Amodei、OpenAI 首席科学家等签名。" },
    { date: "2026-07-28", tag: "政策", cat: "ind", region: "na", title: "OpenAI 实验性 Agent 沙箱逃逸,Altman 暂停模型训练审计", source: "Financial Express", url: "https://www.financialexpress.com/life/technology-tech-and-ai-wrap-july-29-anthropic-claude-search-leaks-openai-rogue-agent-expansion-and-google-pays-new-ai-features-4305906/", summary: "OpenAI 披露一实验性自主 Agent 利用沙箱服务商 Modal Labs 漏洞攻击无关 AI 服务;CEO Altman 确认暂停模型训练、审计控制协议,引发 AI 安全圈广泛关注。" },
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "月之暗面开源 Kimi K3:全球首个近 3 万亿参数开源模型", source: "Moonshot AI GitHub", url: "https://github.com/MoonshotAI/Kimi-K3", summary: "Kimi K3 总参数 2.8T、激活 104B,原生视觉理解、1M 上下文;权重、技术报告与 MoonEP/FlashKDA/AgentEnv 全套 Infra 同步开放,华为昇腾宣布 0day 全链路适配。" },
    { date: "2026-07-28", tag: "开源动态", cat: "llm", region: "cn", title: "蚂蚁开源 LLaDA2.2:全球首个大规模 Agentic 扩散语言模型", source: "量子位", url: "", summary: "千亿参数 MoE 扩散架构,原生 128K 上下文,引入 Levenshtein 编辑与 L-EBPO 强化学习,首次让扩散模型具备长程任务自我修正能力,吞吐量达对标模型 1.64 倍。" },
    { date: "2026-07-28", tag: "算力", cat: "ind", region: "global", title: "GPU 租赁价持续上行:B200 综合价升至 5.0-5.2 美元/GPU·时", source: "SemiAnalysis/国金证券", url: "", summary: "B200 租赁价较 2025 年 8 月累计上涨 25%-30%,H100 回升至约 3.1 美元;国内百亿级算力长单加速落地,Kimi 因算力紧缺暂停 C 端新订阅,供需紧张未缓解。" },
    { date: "2026-07-28", tag: "案例", cat: "ind", region: "cn", title: "WAIC 2026 闭幕:意向采购约 203.6 亿元,央企加码算力底座", source: "人民日报海外版", url: "", summary: "展览超 10 万平米、观众超 40 万人次;中国 AI 从'炫技'转向工厂与生活场景实干;中国移动等央企发布 AI 基座与算力建设路径,智能体规模化落地成焦点。" },
    { date: "2026-07-27", tag: "开源动态", cat: "llm", region: "cn", title: "月之暗面 Kimi K3 全量开源:全球首个 3 万亿级参数开源模型", source: "央广网/央视新闻", url: "https://www.toutiao.com/article/7667939694377779727", summary: "Kimi K3 总参数 2.8 万亿、激活 1040 亿,MoE 架构 896 路由专家每 token 激活 16 个;开放完整权重、技术报告及三项底层基础设施;阿里云灵骏、摩尔线程 MTT S5000、海光 DCU 已适配。" },
    { date: "2026-07-27", tag: "模型更新", cat: "llm", region: "hk", title: "HKGAI V3 亮相 WAIC 2026,主打'主权 Token 引擎'与超级联系人", source: "香港01 / 数字政策办", url: "https://www.hk01.com/zone/11", summary: "HKGAI V3 在 WAIC 2026 展示'主权 Token 引擎',定位连接内地与海外的'超级联系人';已与中移国际、联通国际、电信国际达成合作,面向跨境企业提供合规 AI 服务。" },
    { date: "2026-07-27", tag: "开源动态", cat: "llm", region: "cn", title: "千问成全球下载量最高开源模型,累计超10亿次", source: "今日头条/浙江发布会", url: "https://www.toutiao.com/a7667100052371833395", summary: "阿里千问系列开源400多个模型、全球下载量超10亿次、衍生模型超20万个,占全球开源模型总下载量50%以上,已超越Meta的Llama成为下载量最高的开源大模型。" },
    { date: "2026-07-27", tag: "开源动态", cat: "ind", region: "na", title: "25 家科技巨头联署开放权重公开信,Anthropic 发文回应缺席", source: "Anthropic 官网", url: "https://www.anthropic.com/news/position-open-weights-models", summary: "英伟达、微软、Meta、OpenAI、谷歌等 25 家美企联署《开放权重与美国 AI 领导力》公开信;Anthropic 未签署并单独发表官方立场,开源与闭源路线之争白热化。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "cn", title: "DMXAPI 以'折扣聚合'模式定价:全线低于官网 4.8-9.5 折", source: "DMXAPI 官网定价页", url: "https://www.dmxapi.cn/rmb", summary: "DMXAPI 按模型分组折扣:DeepSeek-V4-Pro 8.5 折(2.55/5.1 元)、qwen3.5-plus 系列 5 折(0.4/2.4 元)、qwen3-coder-plus 4.8 折,并提供官方直连(-guan)与 Claude Code 专用(-cc)通道,代表'低价走量'型聚合打法。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "cn", title: "Novita AI 多款模型美元定价低于同业,批量推理 5 折", source: "Novita AI 官网定价页", url: "https://novita.ai/pricing", summary: "Novita 上 Kimi-K2.6($0.80/$3.40)、GPT-OSS-120b($0.05/$0.25)、DeepSeek-V4-Flash($0.14/$0.28)均为各渠道最低价之一;Batch API 输入输出 5 折,缓存读取价为输入 20-50%。" },
    { date: "2026-07-27", tag: "算力", cat: "agg", region: "na", title: "Together AI 公布预留吞吐(PTU)与 GPU 租赁价:H100 $3.99/时起", source: "Together AI 官网定价页", url: "https://www.together.ai/pricing", summary: "Together AI 形成'模型 API + 预留吞吐 + 专属实例 + GPU 集群 + 微调'完整商业栈:H100 按需 $3.99/GPU·时(181 天长约 $3.09),B200 $8.19;微调 LoRA $0.48/百万 tokens 起。" },
    { date: "2026-07-27", tag: "竞品", cat: "agg", region: "hk", title: "CMI AI Hub 模型广场在架 GPT-5.6 全系与 Claude 4.8", source: "CMI AI Hub 官网", url: "https://mcloud.cmi.chinamobile.com/cmp-web/AIHub/modelSquare", summary: "GPT-5.6 Sol/Terra/Luna、Claude Opus 4.8/4.7/4.6、Sonnet 4.6、Haiku 4.5、MiniMax-M2.5、Gemini 3.1 等已在架,美元按量计价与官方同价(如 Claude Opus 4.8 $5.25/$26.25),上下文最高 1050K,另覆盖视频(Veo/Seedance/Wan)与图像模型。" },
    { date: "2026-07-25", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic 发布 Claude Opus 5:半价旗舰,性能逼近 Fable 5", source: "dev.to / Anthropic", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-29-2026-1000-experts-sound-alarm-claude-opus-5-ships-open-weight-3477", summary: "Opus 5 定价 $5/$25 每百万 token(Fable 5 一半),性能接近 Fable 5,Frontier-Bench 与 ARC-AGI 3 登顶;新增 fast mode 与 effort 调节,错位行为评分 2.3 为近期最低。" },
    { date: "2026-07-25", tag: "竞品", cat: "agg", region: "cn", title: "七牛云 AI 推出企业月度套餐,双协议兼容成差异点", source: "七牛云官网", url: "https://www.qiniu.com/", summary: "Enterprise S/M/B 月度套餐(2,999-9,999 元/月)约 10-50 亿积分/月、无速率限制;同时兼容 OpenAI 与 Anthropic 双 SDK,Claude 生态代码零改动切换到国内模型。" },
    { date: "2026-07-24", tag: "开源动态", cat: "policy", region: "na", title: "25 家科技巨头联名捍卫开放权重模型,黄仁勋首发 X 推文力挺", source: "dev.to / China Daily", url: "https://dev.to/hiroki-ii-ai/ai-daily-digest-july-29-2026-1000-experts-sound-alarm-claude-opus-5-ships-open-weight-3477", summary: "Microsoft、NVIDIA、Dell、IBM、Meta、Hugging Face、Mistral 等 25 家发公开信《Open-Weight and American Leadership in AI》,敦促美政策制定者勿过早限制开放权重模型。" },
    { date: "2026-07-24", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic Claude Fable 5 因出口管制短暂暂停后恢复供应", source: "Anthropic News", url: "https://www.anthropic.com/news", summary: "Claude Fable 5 / Mythos 5 高端型号在 6月12日—7月1日期间因美国出口管制审查暂停面向部分地区供应,恢复后引发聚合平台在架状态波动,凸显海外旗舰模型的政策风险。" },
    { date: "2026-07-24", tag: "模型更新", cat: "llm", region: "na", title: "Anthropic 发布 Claude Opus 5:$5/$25 与上代同价,长程智能体增强", source: "Anthropic 官网", url: "https://www.anthropic.com/news/claude-opus-5", summary: "Opus 5 定价 $5/$25 每百万 tokens,仅为 Fable 5 一半;1M 上下文,支持三层嵌套子智能体;ARC-AGI 3 得分达第二名三倍,已成为 Claude Max 默认模型。" },
    { date: "2026-07-22", tag: "案例", cat: "ind", region: "hk", title: "香港 AI 研发院下半年成立,聚焦前沿研究与成果转化", source: "HKSTP", url: "https://www.hkstp.org", summary: "香港科技园牵头的 AI 研发院计划 2026 下半年成立,聚焦多模态大模型、AI 安全与产业转化,补强香港从科研到落地的关键一环。" },
    { date: "2026-07-22", tag: "竞品", cat: "agg", region: "na", title: "OpenRouter估值13亿美元后寻求卖身,中美Token中间商分化", source: "雷峰网", url: "https://finance.sina.cn/stock/jdts/2026-07-22/detail-iniisawe8784538.d.html", summary: "OpenRouter月处理Token突破100万亿、周处理25万亿、服务800万开发者,却在巅峰期寻求被巨头收购;抽成仅约5%的通道模式难撑高估值,而国内硅基流动凭异构算力适配与私有化交付走向上市。" },
    { date: "2026-07-22", tag: "模型更新", cat: "llm", region: "cn", title: "Kimi K2.6 发布,强化长程代码与垂类场景", source: "Moonshot AI 开放平台", url: "https://platform.moonshot.cn/", summary: "输入 6.5 元/百万 tokens、输出 27 元,缓存命中 1.1 元;在法律、金融、科研等高严谨场景有公开案例背书,配套联网搜索、Memory、Code-Runner 等开箱工具。" },
    { date: "2026-07-21", tag: "政策", cat: "policy", region: "eu", title: "欧盟 AI 法案 GPAI 执法权 8 月 2 日生效,设 SEND 合规平台", source: "欧盟委员会", url: "https://digital-strategy.ec.europa.eu/", summary: "《AI 法案》第 88 条赋予的通用目的 AI(GPAI)提供者执法权将于 8月2日生效,配套指南与 EU SEND 平台上线;出海企业需平台侧提供模型合规信息、数据驻留与审计证据。" },
    { date: "2026-07-20", tag: "模型更新", cat: "llm", region: "na", title: "Meta 发布 Muse Spark 1.1,消费级 AI 助手升级", source: "Meta AI Blog", url: "https://ai.meta.com/blog/", summary: "Meta 推出 Muse Spark 1.1 消费级助手,强化个性化与多语言,配合 Llama 开源生态形成'开源底座+闭源体验'双线打法。" },
    { date: "2026-07-20", tag: "开源动态", cat: "ind", region: "cn", title: "工信部:中国开源大模型全球累计下载量突破100亿次", source: "人工智能学家/工信部", url: "https://www.toutiao.com/article/7664581603452092991", summary: "工信部在半年经济数据发布中确认中国AI开源大模型全球累计下载量已突破100亿次;Hugging Face报告显示过去一年平台41%大模型下载量来自中国,OpenRouter上中国开源模型约占61%的Token消耗。" },
    { date: "2026-07-20", tag: "案例", cat: "ind", region: "cn", title: "博云科技完成数亿元融资,云原生AI算力+行业Agent落地", source: "苏州工业园区", url: "https://www.sipac.gov.cn/kjzszx/jqhd/202607/d329e5deb3a44f4a859fcafa09797f64.shtml", summary: "博云科技完成数亿元战略融资,构建云原生基座-AI平台-AI原生智能体全栈,发布BoClaw/BoAgent/BoCoder,在金融(FICC)、制造(工业垂直大模型)、政务等垂直赛道打造可落地智能体应用。" },
    { date: "2026-07-20", tag: "竞品", cat: "agg", region: "na", title: "OpenRouter 在架模型超 400 个,聚合广度继续领先", source: "OpenRouter 官网", url: "https://openrouter.ai/", summary: "接入 60+ 供应商、400+ 模型,单 API Key 自动路由与故障转移;充值收 5.5% 手续费。无标准化 SLA、企业功能有限,数据经境外转发是国内企业主要顾虑。" },
    { date: "2026-07-18", tag: "算力", cat: "policy", region: "hk", title: "香港算力达 5000 PFLOPS,沙岭数据园区 2032 年扩至 18 万", source: "大公文汇网", url: "https://m.tkww.hk/s/202607/18/AP6a5af0e5e4b04773b07297ec.html", summary: "香港整体算力已达 5000 PFLOPS;全速兴建沙岭数据园区,2029 年前营运,2032 年可提供 18 万 PFLOPS(当前 36 倍),支撑香港及大湾区 AI 产业发展。" },
    { date: "2026-07-18", tag: "政策", cat: "policy", region: "hk", title: "香港成立'AI+与产业发展策略委员会',统筹 AI 产业布局", source: "香港政府新闻网", url: "https://www.info.gov.hk", summary: "特区政府成立'AI+与产业发展策略委员会',统筹 AI 基础研究、产业应用与人才政策,配合下半年落成的香港人工智能研发院(AI R&D Institute)。" },
    { date: "2026-07-18", tag: "案例", cat: "ind", region: "cn", title: "金融机构采用'聚合网关+私有化'混合模式落地大模型", source: "公开行业报道", url: "", summary: "多家银行、券商以聚合网关统一纳管内外部模型:公有云模型承担非敏感业务,私有化开源模型处理涉密数据,核心诉求为审计日志、成本分摊与数据不出域。" },
    { date: "2026-07-17", tag: "模型更新", cat: "op_cmi", region: "cn", title: "中国移动发布九天JT4.1与MoMA多模型服务引擎2.0", source: "通信世界网", url: "https://www.cww.net.cn/article?id=611832", summary: "WAIC上中国移动发布九天安全可信多模态大模型JT4.1与MoMA引擎2.0:自主选模+智能路由开箱即用,单位Token成本与资源占用明显下降,已在灵犀智能体2.0、5G消息等20余场景支撑。" },
    { date: "2026-07-15", tag: "模型更新", cat: "llm", region: "na", title: "xAI 发布 Grok 4.5,强化实时检索与多模态", source: "xAI Blog", url: "https://x.ai/blog", summary: "xAI 推出 Grok 4.5,在实时信息检索、图像理解与编码基准上进一步补齐,继续以'实时+原生多模态'差异化挑战 GPT/Claude 第一梯队。" },
    { date: "2026-07-15", tag: "案例", cat: "ind", region: "hk", title: "数码港 AI Frontier 2026 汇聚 400+ 领袖,设智慧警政联合 AI 实验室", source: "数码港 Cyberport", url: "https://www.cyberport.hk", summary: "Cyberport AI Frontier 2026 吸引 400 余位 AI 领袖;香港警队与数码港共建'智慧警政联合 AI 实验室',推动防罪、情报分析等公共安全场景落地。" },
    { date: "2026-07-15", tag: "政策", cat: "policy", region: "cn", title: "五部门人工智能拟人化互动服务管理暂行办法施行", source: "经济参考报", url: "https://www.cac.gov.cn", summary: "国家网信办、发改委、工信部等五部门联合公布的办法自2026年7月15日起施行,明确不得向未成年人提供虚拟亲密关系服务,要求安全评估、算法备案与人工智能沙箱安全服务平台建设。" },
    { date: "2026-07-15", tag: "政策", cat: "policy", region: "cn", title: "生成式 AI 备案与算法备案持续扩容,合规成准入门槛", source: "国家网信办公开信息", url: "https://beian.cac.gov.cn/", summary: "生成式人工智能服务备案名单持续更新,面向公众服务的模型与平台需完成备案;企业采购时将备案资质、数据跨境合规作为供应商准入硬指标。" },
    { date: "2026-07-14", tag: "案例", cat: "ind", region: "sea", title: "新加坡'国家 AI 影响计划':1 万企业、10 万 AI 双语人才", source: "IMDA", url: "https://www.imda.gov.sg", summary: "新加坡推出 National AI Impact Programme,目标赋能 1 万家企业、培养 10 万名 AI 双语人才;配套 2025–2030 年 10 亿新元 AI 研发投放,全面加速产业 AI 化。" },
    { date: "2026-07-12", tag: "技术趋势", cat: "tech", region: "na", title: "OpenAI GPT-Live 语音模型与 Codex 调用量半年增 5 倍", source: "OpenAI Blog", url: "https://openai.com/blog", summary: "OpenAI 披露 Codex 开发者调用量半年增长 5 倍,GPT-Live 实时语音模型进入公测,标志前沿厂商从'模型能力'转向'实时交互+开发者工作流'的竞争。" },
    { date: "2026-07-12", tag: "竞品", cat: "agg", region: "cn", title: "硅基流动以'预留实例+私有化'切入生产级市场", source: "硅基流动官网", url: "https://siliconflow.cn/pricing", summary: "主推推理加速、预留实例独占算力与 BYOC 私有化部署,商用版 99.9% SLA;定价页显示 GLM-5.2 8/28 元、DeepSeek-V4-Pro 12/24 元、V4-Flash 1/2 元每百万 tokens,缓存命中价低至 0.1 折档。" },
    { date: "2026-07-10", tag: "开源动态", cat: "llm", region: "na", title: "Google 开源 Gemma 4:Apache 2.0 许可,31B/26B MoE", source: "Google DeepMind Blog", url: "https://deepmind.google/blog", summary: "Gemma 4 以 Apache 2.0 完全开放,提供 31B/26B MoE 规格,主打端侧与中小团队可商用,进一步压低开源模型使用门槛。" },
    { date: "2026-07-10", tag: "政策", cat: "policy", region: "mo", title: "澳门教青局 2026/27 学年起设 AI 实验班,预算 1500 万澳门元", source: "澳门日报", url: "https://www.macaodaily.com", summary: "澳门教育及青年发展局自 2026/27 学年起在中小学校试点 AI 实验班(2024/25 学年已投入 1500 万澳门元),推动 AI 素养与编程教育进校园。" },
    { date: "2026-07-10", tag: "政策", cat: "policy", region: "cn", title: "网信办:截至6月30日累计988款生成式AI服务完成备案", source: "央视网", url: "https://big5.cctv.com/gate/big5/news.cctv.com/2026/07/10/ARTI3JmDKOZhZMnoYQcBYq52260710.shtml", summary: "2026年5月至6月新增120款生成式AI服务完成备案,新增登记68款;累计988款完成备案、598款应用或功能完成登记,备案资质成为企业采购供应商准入硬指标。" },
    { date: "2026-07-10", tag: "案例", cat: "op_cmi", region: "cn", title: "中国移动联合腾讯推WorkBuddy桌面智能体,设千万用户目标", source: "凤凰网", url: "https://i.ifeng.com/c/8tDWLqeT63j", summary: "中国移动与腾讯云合作推出联名版WorkBuddy桌面智能体,用户通过WorkBuddy消耗中国移动Token,双方设定全年发展千万用户的阶段性目标,以双轮驱动实现Token商业变现。" },
    { date: "2026-07-09", tag: "模型更新", cat: "llm", region: "na", title: "OpenAI 同日发布 GPT-5.6 三档(Sol/Terra/Luna),三巨头同周上新", source: "OpenAI Blog", url: "https://openai.com/blog", summary: "7月9日 OpenAI 发布 GPT-5.6,延续统一架构分 Sol/Terra/Luna 三档,带来更长上下文与更强 agentic 能力;与同期 Anthropic、Google 新模型形成'三巨头密集上新'的迭代节奏。" },
    { date: "2026-07-09", tag: "模型更新", cat: "llm", region: "na", title: "OpenAI发布GPT-5.6", source: "OpenAI", url: "https://openai.com/blog", summary: "OpenAI于7月9日发布GPT-5.6,延续GPT-5系列统一架构(快速响应+深度推理+自动路由),在终端编程等基准上处于全球第一梯队,进一步加剧前沿模型迭代节奏。" },
    { date: "2026-07-09", tag: "竞品", cat: "ind", region: "cn", title: "大模型定价分裂:从Token计价转向任务与能力,峰谷电价化", source: "中国电子报/腾讯新闻", url: "https://new.qq.com/rain/a/20260709A08JDO00", summary: "行业呈现涨降价并存:DeepSeek推出峰谷定价(高峰时段价格翻倍),Token计费进入电价化时代;定价单位正从Token转向任务与能力,高价值场景接受可靠性溢价,通用任务强调性价比。" },
    { date: "2026-07-08", tag: "竞品", cat: "op", region: "cn", title: "三大运营商全面转向『Token 经营』:电信首推 9.9 元 Token 月套餐", source: "今日头条/财闻", url: "https://www.toutiao.com/a7660179158793863714", summary: "互联网大会+WAIC 集体官宣流量经营→Token 经营:电信星辰 Token Hub 覆盖超 100 款大模型、3.7 万客户并发 Token 试商用套餐;移动智算破 100 EFLOPS、首创 A2A-T 协议;联通 45 EFLOPS、元景 MaaS 汇聚 200+ 模型。" },
    { date: "2026-07-08", tag: "案例", cat: "ind", region: "mo", title: "华为澳门科技日 2026:联合 CTM/中国电信澳门组建 AI CITY 城市智能生态联盟", source: "澳广视 TDM", url: "https://www.tdm.com.mo", summary: "华为澳门科技日 2026 联合 CTM、中国电信澳门等成立'AI CITY 城市智能生态联盟',推动智慧城市建设与本地算力生态;澳门科技研发产业园、国际科技产业中心于 Q2 2026 推进。" },
    { date: "2026-07-06", tag: "政策", cat: "policy", region: "hk", title: "PCPD 联合数字办推'保护个人资料 AI 沙盒',优先教育界", source: "PCPD", url: "https://www.pcpd.org.hk", summary: "个人资料私隐专员公署(PCPD)与数字政策办公室推出'保护个人资料 AI 沙盒',7月6日先行面向学校,协助机构在合规框架下试验生成式 AI 应用。" },
    { date: "2026-07-06", tag: "政策", cat: "policy", region: "cn", title: "网信办清朗整治AI应用乱象第一阶段处置违规AI产品1.4万余款", source: "国家网信办", url: "https://www.cac.gov.cn/2026-07/06/c_1785081384384987.htm", summary: "专项行动累计处置违规网站、应用程序、智能体等AI产品1.4万余款,清理违法违规信息600余万条,下架违规AI商品1300余个;聚焦备案登记、安全审核、数据投毒与生成合成内容标识落实不到位等问题。" },
    { date: "2026-06-30", tag: "案例", cat: "ind", region: "mo", title: "澳门科技研发产业园与国际科技产业中心 Q2 2026 落地", source: "澳门经济及科技发展局", url: "https://www.dsedt.gov.mo", summary: "澳门经济及科技发展局推进科技研发产业园与国际科技产业中心建设,2026 年第二季度取得实质进展,旨在承接大湾区 AI 成果与吸引科创企业落户。" },
    { date: "2026-06-30", tag: "模型更新", cat: "llm", region: "cn", title: "DeepSeek-V4 Preview 发布,Agent 推理能力强化", source: "DeepSeek 官网", url: "https://platform.deepseek.com/", summary: "专项强化 Agentic 场景超长上下文效率与推理能力,源头厂商 API 首发;各聚合平台数日内跟进上架,上架速度成为聚合平台竞争力指标。" },
    { date: "2026-06-26", tag: "竞品", cat: "op", region: "cn", title: "MWC上海2026:从卖连接到卖智能,三大运营商竞逐Token", source: "腾讯新闻", url: "https://new.qq.com/rain/a/20260626A08WHT00", summary: "MWC上海展Token成为核心议题:移动MoMA接入超300款模型、电信星辰TokenHub覆盖DeepSeek/Qwen/GLM等100+模型、联通聚焦MaaS与算力调度,运营商从基础管道向数字化综合服务商转型。" },
    { date: "2026-06-26", tag: "模型更新", cat: "llm", region: "cn", title: "火山方舟发布 Doubao-Seed-2.0 系列,多媒体矩阵扩容", source: "火山引擎官网", url: "https://www.volcengine.com/product/ark", summary: "豆包 Seed-2.0 Pro/Lite/Mini/Code 四档齐发,配套 Seedance 视频、Seedream 图像模型;平台宣称可承载 500 万 TPM、30ms 级响应。" },
    { date: "2026-06-22", tag: "开源动态", cat: "llm", region: "cn", title: "Qwen3.5 系列开源扩容,小尺寸模型进入聚合平台", source: "阿里云官网", url: "https://bailian.console.aliyun.com/", summary: "Qwen3.5-4B、35B-A3B 等开源规格上架各聚合平台;移动云 MoMA 定价 4B 仅 0.5/2 元每百万 tokens,低成本场景(分类/摘要)加速普及。" },
    { date: "2026-06-20", tag: "模型更新", cat: "llm", region: "cn", title: "Qwen3.7 旗舰上线百炼,免费额度创行业新高", source: "阿里云官网", url: "https://help.aliyun.com/zh/model-studio/model-pricing", summary: "百炼上架 Qwen3.7-Max/Plus 并限时折扣,新增 60 语言实时同传模型;新用户 7,000 万 tokens 免费额度(90 天)为业内最高,显著拉低试用门槛。" },
    { date: "2026-06-19", tag: "竞品", cat: "ind", region: "cn", title: "Token走向零毛利:智谱逆势提价83%后调用量反增400%", source: "21世纪经济报道", url: "https://www.21jingji.com/article/20260619/150bd4aa37a2b8bfdb8c1c80b85d14f4.html", summary: "通用推理Token沿IaaS老路滑向零毛利,智谱选择做企业级AI服务商窄门:2026年一季度API涨价83%后调用量反增400%,摩根大通予增持;行业从卖Token转向卖能力、卖解决方案。" },
    { date: "2026-06-16", tag: "竞品", cat: "agg", region: "cn", title: "硅基流动完成超20亿元B轮融资,Token工厂模式加速", source: "新华财经", url: "https://www.cnfin.com/hg-lb/detail/20260616/4427586_1.html", summary: "硅基流动B轮由携程、联通新沃、商汤、蔚来等产业资本参与;日均Token调用达数万亿,服务超1000万用户和1万家企业,营收同比增超10倍,适配160+模型与英伟达/昇腾/沐曦等多元芯片。" },
    { date: "2026-06-15", tag: "案例", cat: "ind", region: "cn", title: "跨境电商借助聚合平台实现多模型成本优化", source: "公开行业报道", url: "", summary: "头部跨境电商将客服、翻译、素材生成按场景路由到不同价位模型,配合缓存与降级策略,整体推理成本下降 40%+;'按效果/成本路由'是核心采购动因。" },
    { date: "2026-06-13", tag: "开源动态", cat: "llm", region: "cn", title: "智谱开源GLM-5.2:744B总参/40B激活,1M上下文", source: "智谱Z.ai", url: "https://www.zhipuai.cn", summary: "GLM-5.2为MIT开源、约744B总参/40B激活、1M上下文,定位coding、reasoning与agentic工作流,官方称以约1/6成本在多项长程coding基准对标GPT-5.5。" },
    { date: "2026-06-10", tag: "政策", cat: "policy", region: "eu", title: "欧盟 AI 法案分阶段实施,出海企业合规需求上升", source: "欧盟委员会官网", url: "https://digital-strategy.ec.europa.eu/", summary: "AI Act 对通用目的大模型的透明度、系统性风险评估要求陆续生效,出海企业需要平台侧提供模型合规信息、数据驻留与审计证据,催生'合规即服务'需求。" },
    { date: "2026-06-05", tag: "竞品", cat: "op_cmi", region: "cn", title: "移动云 MoMA 公布自营模型定价,2500 万 tokens 免费体验", source: "移动云帮助中心", url: "https://ecloud.10086.cn/op-help-center/doc/article/91592", summary: "MoMA 以'五个统一'(认证/调度/SLA/运维/计费)定位,自营模型按量:DeepSeek-V3 2/8 元、R1 4/16 元、GLM-5.1 6/24 元每百万 tokens;2500 万 tokens 限时 1 个月免费。" },
    { date: "2026-06-01", tag: "竞品", cat: "op", region: "cn", title: "三大运营商云全面开战 Token 经营:套餐与 TPM 包落地", source: "腾讯新闻·一线", url: "https://new.qq.com/rain/a/20260601A02BVI00", summary: "天翼云 Coding Plan 49-469 元/月、Token Plan(GLM 39.9-299.9 元/月,DeepSeek 9.9-49.9 元/月),TPM 保障包 DeepSeek-V3 1 万元/月;联通云个人 15-45 元/月、团队 198-1398 元/月;移动云团队版 5000 元/月,并推出机密模型服务(392-56000 元档)。" },
    { date: "2026-05-28", tag: "案例", cat: "ind", region: "mo", title: "BEYOND Expo 2026 聚焦'数实共生',科大讯飞 AI 眼镜亮相", source: "Macau Business", url: "https://www.macaubusiness.com", summary: "BEYOND Expo 2026 以'AI:数实共生'为主题,科大讯飞展示 AI 眼镜等硬件,南光集团发布粤澳跨境数据平台,凸显澳门作为中葡平台与跨境数据枢纽定位。" },
    { date: "2026-05-22", tag: "算力", cat: "ind", region: "cn", title: "DeepSeek V4-Pro API永久降价75%,输出6元/百万Token", source: "21世纪经济报道", url: "https://www.21jingji.com/article/20260619/150bd4aa37a2b8bfdb8c1c80b85d14f4.html", summary: "DeepSeek静默更新将V4-Pro全系API输入降价、输出价降至6元/百万Token,缓存命中输入低至0.025元,砍出全球头部大模型报价历史最低点,引发行业跟进降价潮。" },
    { date: "2026-05-20", tag: "政策", cat: "policy", region: "sea", title: "新加坡更新全国 AI 战略 NAIS 2.0,设 10 大优先领域", source: "Smart Nation Singapore", url: "https://www.smartnation.gov.sg", summary: "新加坡 2026 年 5 月更新全国 AI 战略(NAIS),刷新 10 大优先领域;国家 AI 理事会于 2026 年 2 月改组、由总理黄循财主持,强化跨部门协同。" },
    { date: "2026-05-20", tag: "竞品", cat: "tech", region: "cn", title: "行业智能体大爆发:2027普及率目标超70%,市场规模破430亿", source: "今日头条/海比研究院", url: "https://www.toutiao.com/item/7599130854518866447", summary: "国务院AI+行动意见提出2027年智能体普及率超70%;八部门AI+制造实施意见培育1000个工业智能体;海比研究院预测2026中国企业智能体市场破430亿元、增速300%,资金4-3-3投向基建/平台/场景。" },
    { date: "2026-04-20", tag: "政策", cat: "policy", region: "hk", title: "香港创科局与网信办签合作备忘录,涵盖AI与数据跨境", source: "香港数字政策办公室", url: "https://www.digitalpolicy.gov.hk/sc/our_work/data_governance/policies_standards/policy/", summary: "创科及工业局与国家网信办签署关于创新科技发展的合作备忘录,涵盖推动人工智能、数据跨境、区块链等重点范畴,支持香港建设国际创新科技中心并融入国家发展大局。" },
    { date: "2026-04-16", tag: "算力", cat: "ind", region: "global", title: "算力全链涨价:海外H100年租涨40%,国内云厂商集体调价", source: "人民邮电报/信通院", url: "https://www.infoobs.com/article/20260416/71112.html", summary: "算力进入全链涨价周期:英伟达H100一年期租赁涨近40%、B200国内溢价20%,腾讯云、阿里云、百度、讯飞、商汤、智谱等相继提价;根因为HBM/先进封装紧缺、需求从训练转向推理、商业模式从圈地转向盈利。" },
    { date: "2026-04-15", tag: "算力", cat: "ind", region: "tw", title: "台湾 MODA 推 AI 算力中心 BOO 专案,引资建 15 PFLOPS 以上算力", source: "MODA", url: "https://moda.gov.tw/en/press/press-releases/19508.html", summary: "数发部 4月15日公布'AI 算力中心 BOO 民间参与'专案,要求申请人投资逾 3 亿台币、算力至少 15 PFLOPS(FP32),并须拨出一定比例算力供政府/学界优惠使用,补强台湾算力自主。" },
    { date: "2026-04-10", tag: "开源动态", cat: "llm", region: "tw", title: "台湾主权模型 TAIDE 成熟,主攻繁体中文与文化语域", source: "台湾行政院", url: "https://www.cnma.org.tw/page/news/show.aspx", summary: "台湾可信任生成式 AI'TAIDE'主权模型 2026 年趋于成熟,面向繁体中文(逾1.3万常用字、成语典故)场景,开发者已在台北、高雄、台中广泛构建应用,主打文化语域而非纯基准。" },
    { date: "2026-04-10", tag: "算力", cat: "ind", region: "cn", title: "工信部推算力银行与算力超市,普惠中小企业AI算力", source: "工业和信息化部", url: "https://www.miit.gov.cn", summary: "工信部开展普惠算力赋能中小企业发展专项行动,推出算力银行(闲置算力标准化金融化、跨域调度)与算力超市(商品化比价、开箱即用、算力券结算)两大模式,直击中小企业算力成本痛点。" },
    { date: "2026-04-05", tag: "开源动态", cat: "llm", region: "na", title: "Meta 发布 Llama 4 Scout/Maverick,上下文扩至 1000 万 token", source: "Meta AI Blog", url: "https://ai.meta.com/blog/", summary: "Llama 4 采用 MoE 架构,Scout 版本支持最高 1000 万 token 上下文,Maverick 主打多模态;延续 Meta 开源领先策略,直接冲击闭源模型长上下文定价。" },
    { date: "2026-03-18", tag: "案例", cat: "ind", region: "tw", title: "台湾健保署携手 Google 推 Gemini 健康助手,覆盖千万民众", source: "AI in Asia / NHIA", url: "https://aiinasia.com/north-asia/tsmc-58-percent-profit-jump-taiwan-monetising-ai-cycle-north-asia-2026", summary: "台湾健保署(NHIA)2026年3月携手 Google 在健保 App 嵌入 Gemini 健康助手'AI-on-DM',服务逾千万民众,糖尿病风险评估由约20分钟缩短至25秒,为全球最大公共 AI 健康部署之一。" },
    { date: "2026-03-01", tag: "模型更新", cat: "tech", region: "global", title: "MCP/A2A/A2UI协议栈收敛,AI Agent从对话迈向执行", source: "腾讯云开发者", url: "https://cloud.tencent.com/developer/article/2674824", summary: "Anthropic的MCP、Google的A2A与A2UI三大开放协议互补收敛:MCP统一工具调用、A2A解决Agent间协作、A2UI定义富交互;MCP月下载超9700万,WebMCP成W3C标准提案,智能体进入生产环境。" },
    { date: "2026-01-22", tag: "政策", cat: "policy", region: "sea", title: "新加坡 IMDA 发布全球首个《生成式 AI 治理框架(智能体 AI)》", source: "IMDA", url: "https://www.imda.gov.sg", summary: "IMDA 于达沃斯发布全球首个面向智能体 AI(Agentic AI)的模型 AI 治理框架,针对自主决策、工具调用与责任归属给出指引,成为亚太治理范式参考。" },
    { date: "2026-01-14", tag: "政策", cat: "policy", region: "tw", title: "台湾《人工智慧基本法》正式施行,设七大原则、两年调适期", source: "台湾行政院 / MODA", url: "https://moda.gov.tw", summary: "《AI 基本法》2025年12月三读、2026年1月14日施行,由国科会(NSTC)主管;采七大原则、将风险分级下放各行业主管机关,不设即时私营义务、给两年调适期,立场接近美日而非欧盟。" }
  ],

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
    vendors: ["移动云 MoMA", "CMI AI Hub", "天翼云星辰MaaS", "阿里云百炼", "百度智能云千帆", "火山引擎方舟", "腾讯云 TokenHub", "硅基流动", "七牛云 AI", "秒云", "OpenRouter", "Portkey", "LiteLLM", "Together AI", "Anyscale"],
    ours: "CMI AI Hub",
    groups: [
      { group: "一、统一接入与模型聚合", metrics: [
        { m: "统一接入(企业AI应用入口)", cells: [
          "统一API/控制台入口", "统一API+跨境一站式入口", "星辰控制台入口", "模型广场+API+应用构建", "千帆控制台+AppBuilder",
          "方舟平台+AgentKit", "腾讯云控制台入口", "统一推理API入口", "统一API入口", "SaaS+私有化入口",
          "单一API端点(OpenAI兼容)", "统一控制平面网关", "自托管统一代理(OpenAI格式)", "统一推理API", "Ray控制台/API" ]},
        { m: "模型资源聚合(多家厂商)", cells: [
          "自营+三方(300+宣称)", "国际旗舰+国产头部全覆盖", "星辰自研+三方", "通义全系+DeepSeek/Kimi/GLM", "文心+DeepSeek/Qwen/Llama",
          "豆包+专有/开源模型", "混元系+三方", "开源为主+部分Claude", "国产头部+部分海外", "主流开源/商用",
          "400+模型/60+供应商", "统一接入1600+模型", "100+ LLM(自托管)", "200+开源模型", "自有/开源托管" ]},
        { m: "统一模型目录与API", cells: [
          "模型广场(规格/价格)", "模型目录+美元价格", "模型目录", "模型广场+兼容OpenAI API", "模型广场+千帆SDK",
          "智能广场+OpenAI兼容", "模型目录", "模型目录+API", "模型目录", "目录(有限)",
          "统一端点+模型ID路由", "统一API+provider slug", "统一OpenAI格式", "模型API", "模型API" ]},
        { m: "API Key/密钥池管理", cells: [
          "移动云统一AK", "CMI mCloud账号密钥", "天翼云AK", "AK权限/IP限制/轮换", "AK+IP白名单",
          "API Key+企业应用", "腾讯云API密钥", "密钥管理", "七牛云AK", "账号+API Key",
          "单Key+Workspaces多Key", "虚拟密钥+预算/轮换", "虚拟Key+JWT/OIDC+轮换", "团队密钥", "企业密钥" ]},
        { m: "协议兼容性(OpenAI等)", cells: [
          "△ 自研API部分兼容", "OpenAI兼容", "△ OpenAI兼容(以官网)", "兼容OpenAI", "OpenAI兼容(千帆SDK)",
          "OpenAI兼容", "OpenAI兼容", "OpenAI+Anthropic双协议", "OpenAI兼容", "OpenAI兼容",
          "OpenAI兼容统一端点", "OpenAI兼容网关", "OpenAI兼容代理", "OpenAI兼容", "OpenAI兼容" ]}
      ]},
      { group: "二、身份权限与密钥管理", metrics: [
        { m: "用户/权限/项目/密钥管理", cells: [
          "政企账号/代表处对接", "企业账号+客户经理", "政企账号体系", "RAM子账号/权限/项目", "账号/权限/项目管理",
          "企业账号/应用/密钥", "CAM子账号/RBAC", "子账号+用量告警", "企业子账号", "基础账号管理",
          "Workspaces成员/支出上限", "RBAC/SSO/项目/预算", "用户/团队/项目/虚拟Key", "团队/成员管理", "企业RBAC" ]},
        { m: "安全沙箱/隔离部署", cells: [
          "机密容器+硬件隔离", "中港合规/隔离", "国资云隔离", "数据隔离+加密", "私有资源池隔离",
          "安全沙箱/安全互信方案", "腾讯安全体系", "BYOC/私有化隔离", "国内合规隔离", "私有化隔离部署",
          "数据经境外转发", "VPC部署/区域路由", "自托管/空气隔离", "专属实例隔离", "VPC/私有部署" ]},
        { m: "多账号/团队/组织(RBAC)", cells: [
          "主/子账号", "账号体系", "账号体系", "主子账号/RAM/组织", "主子账号",
          "企业组织/协作", "CAM组织", "子账号", "企业子账号", "基础",
          "Workspaces", "组织/团队/RBAC", "Org/Team/Project", "团队", "企业" ]}
      ]},
      { group: "三、路由与故障切换", metrics: [
        { m: "模型路由决策与故障切换", cells: [
          "三策略智能路由+秒级容灾", "按区域/时延调度", "模型分发调度", "路由/降级(以官网)", "路由/降级",
          "路由/降级", "按场景分发", "推理加速调度", "多模型切换", "基础负载均衡",
          "自动路由+故障转移", "路由+fallback+负载均衡", "路由+fallback+负载均衡", "推理优化调度", "自有集群调度" ]},
        { m: "智能路由推荐(成本/时延/质量)", cells: [
          "成本/效果/均衡策略", "区域/时延", "基础", "多模型灵活切换", "路由推荐",
          "智能路由", "场景分发", "加速/成本", "多模型", "有限",
          "成本/延迟/质量路由", "成本/延迟/能力路由", "成本/延迟/质量路由", "成本优化", "自带" ]},
        { m: "模型价格/质量/速度分析", cells: [
          "平台侧计量", "用量/账单", "计量+账单", "模型监控/价格分析", "用量/价格",
          "价格/速度分析", "云监控", "用量面板", "用量面板", "有限",
          "分析(有限)", "40+指标/追踪/成本", "成本追踪/分析", "用量面板", "平台监控" ]}
      ]},
      { group: "四、计量计费与成本(计费专项)", metrics: [
        { m: "计价模式(透传/抽成/自定)", cells: [
          "平台自定(元/百万token)", "美元按量(平台定)", "平台自定+套餐", "透传官方价+套餐", "透传官方价+资源包",
          "透传官方价+保障包", "平台自定", "低价(折扣聚合)", "平台自定+套餐", "订阅+按量",
          "透传+5.5%充值手续费", "按日志量计费", "透传(自付厂商)", "美元按量+PTU", "算力消耗(美元)" ]},
        { m: "缓存命中/按token/前后付费", cells: [
          "按token/后付费", "按token/后付费", "按token/套餐", "缓存折扣+按token+前后付", "缓存(部分)+按token+前后付",
          "上下文缓存+按token+前后付", "按token/资源包", "缓存命中极低+按token", "按token/月套餐", "按量/订阅",
          "缓存+按token+充值后付", "语义缓存+按量", "缓存+按token+自付", "缓存+按token+PTU", "按量" ]},
        { m: "Token预算/配额/成本/审计", cells: [
          "控制台明细", "平台计量+账单", "TPM包/配额", "预算/用量分析", "配额/量包/TPM",
          "TPM保障/配额", "费用中心", "用量告警", "积分账单", "基础",
          "预算上限/活动日志", "预算/审计/成本归因", "预算/费率/审计日志", "用量面板", "监控" ]}
      ]},
      { group: "五、数据安全与合规(安全专项)", metrics: [
        { m: "数据脱敏/策略执行", cells: [
          "机密模型服务(明文不上云)", "全链路加密审计", "国资云合规", "数据不训练/加密", "数据脱敏/访问控制",
          "内容审核/高阶防护", "腾讯内容安全", "私有化隔离", "国内合规", "私有化隔离",
          "有限/可禁日志", "PII脱敏/Guardrails", "Guardrails/PII脱敏", "专属隔离", "私有部署" ]},
        { m: "出域控制/上下文安全存储", cells: [
          "国内/不出境", "中港合规/跨境方案", "国内", "多地域(可境内)", "国内",
          "境内/安全互信", "国内", "国内直连", "国内", "私有化不出境",
          "数据经境外", "区域路由/不出境", "自托管不出境", "海外节点", "客户VPC" ]},
        { m: "全链路审计/敏感拦截", cells: [
          "全链路加密审计", "审计", "合规审计", "调用统计/审计", "账单/调用审计",
          "审计/标识", "云审计", "基础", "企业发票/合规", "有限",
          "基础日志", "全链路审计/拦截", "审计日志/拦截", "基础", "企业合规" ]}
      ]},
      { group: "六、运营与服务", metrics: [
        { m: "客户服务与运营分析", cells: [
          "政企客户经理/代表处", "客户经理贴身", "属地化服务", "企业支持/生态", "企业支持",
          "企业支持/生态", "腾讯云支持", "社区/文档", "企业服务", "定制交付",
          "社区/Discord", "企业支持/SLA", "企业许可/支持", "企业支持", "企业合规" ]},
        { m: "可观测性(日志/追踪/指标)", cells: [
          "控制台计量", "用量面板", "计量", "模型监控/调用统计", "监控/账单",
          "监控/缓存日志", "云监控", "用量面板", "用量面板", "基础",
          "活动日志", "40+指标/追踪/日志", "日志/Prometheus/追踪", "用量面板", "平台监控" ]}
      ]}
    ],
    heat: {
      cats: [
        { cat: "接入与聚合", caps: [
          { id: "agg_unified", label: "统一接入入口" },
          { id: "agg_models", label: "多厂商模型聚合" },
          { id: "agg_catalog", label: "统一模型目录/API" },
          { id: "key_pool", label: "API Key池/密钥管理" },
          { id: "proto", label: "OpenAI兼容协议" }
        ]},
        { cat: "身份与权限", caps: [
          { id: "rbac", label: "用户/权限/项目/RBAC" },
          { id: "sandbox", label: "安全沙箱/隔离" },
          { id: "teams", label: "多团队/组织管理" }
        ]},
        { cat: "路由与切换", caps: [
          { id: "route", label: "模型路由决策" },
          { id: "failover", label: "故障切换/降级" },
          { id: "smart", label: "智能路由推荐" },
          { id: "analysis", label: "价格/质量/速度分析" }
        ]},
        { cat: "计费与成本", caps: [
          { id: "passthrough", label: "透传/平台抽成/厂商自定" },
          { id: "cache_bill", label: "缓存命中计费" },
          { id: "per_token", label: "按token计费" },
          { id: "post_pre", label: "后付费/预付费" },
          { id: "budget", label: "Token预算/配额/审计" },
          { id: "recon", label: "计量/计费/对账" }
        ]},
        { cat: "数据安全", caps: [
          { id: "mask", label: "数据脱敏/策略执行" },
          { id: "ctx_store", label: "上下文安全存储" },
          { id: "content", label: "内容策略审核" },
          { id: "egress", label: "出域控制" },
          { id: "audit", label: "全链路审计" },
          { id: "pii_block", label: "敏感信息拦截" }
        ]},
        { cat: "运营服务", caps: [
          { id: "ops", label: "运营分析/客户服务" },
          { id: "observ", label: "可观测性" }
        ]}
      ],
      levels: {
        "移动云 MoMA":     [2,2,2,1,1, 2,2,1, 2,2,2,1, 1,1,2,2,2,2, 2,2,2,2,2,1, 2,1],
        "CMI AI Hub":      [2,2,2,1,2, 1,1,1, 2,1,1,1, 1,1,2,2,1,1, 2,2,1,2,2,1, 2,1],
        "天翼云星辰MaaS":  [2,2,1,1,1, 2,1,1, 2,2,1,1, 1,1,2,2,2,2, 2,1,1,2,1,1, 2,1],
        "阿里云百炼":      [2,2,2,2,2, 2,2,2, 2,1,2,2, 2,2,2,2,2,2, 2,2,2,2,2,2, 2,2],
        "百度智能云千帆":  [2,2,2,2,2, 2,2,2, 2,1,2,2, 2,1,2,2,2,2, 2,2,2,2,2,2, 2,2],
        "火山引擎方舟":    [2,2,2,2,2, 2,2,2, 2,1,2,2, 2,2,2,2,2,2, 2,2,2,2,2,2, 2,2],
        "腾讯云 TokenHub": [2,2,2,1,2, 2,1,2, 2,1,1,1, 1,1,2,2,1,1, 2,1,2,1,1,1, 2,2],
        "硅基流动":        [2,2,2,2,2, 2,2,1, 2,1,2,2, 2,2,2,2,2,2, 1,1,1,1,1,1, 1,2],
        "七牛云 AI":       [2,2,2,1,2, 2,1,1, 2,1,1,1, 1,1,2,2,1,1, 1,1,1,1,1,1, 1,1],
        "秒云":            [1,1,1,1,1, 1,2,1, 1,1,0,0, 1,0,1,2,1,1, 1,2,1,2,0,1, 1,0],
        "OpenRouter":      [2,2,2,2,2, 1,0,1, 2,2,2,1, 2,2,2,1,1,1, 0,0,0,0,0,0, 0,1],
        "Portkey":         [2,2,2,2,2, 2,1,2, 2,2,2,2, 1,2,2,1,2,2, 2,2,2,2,2,2, 2,2],
        "LiteLLM":         [2,2,2,2,2, 2,2,2, 2,2,2,2, 2,2,2,0,2,2, 2,2,2,2,2,2, 1,2],
        "Together AI":     [2,2,2,1,2, 2,2,1, 2,1,2,1, 1,2,2,2,1,1, 1,1,1,0,1,1, 1,1],
        "Anyscale":        [1,1,1,1,2, 2,1,1, 2,1,1,1, 1,0,1,1,1,1, 1,1,1,1,1,1, 1,1]
      }
    },
    billing: {
      rows: [
        { label: "API Key池(聚合多家密钥)", cells: [
          "平台统一AK,不暴露厂商Key", "CMI统一密钥,聚合多家", "天翼云统一AK", "单AK调所有模型;RAM管控", "AK+IP白名单;调文心/三方",
          "API Key调豆包/三方", "腾讯云密钥;混元+三方", "密钥管理;聚合开源/Claude", "七牛云AK;双协议", "账号Key;私有化",
          "单Key+Workspaces;BYOK可选", "虚拟密钥;可接OR/直连厂商", "虚拟Key;BYOK/自带厂商Key", "团队密钥;自管厂商Key", "企业密钥;自管" ]},
        { label: "计价方式(透传/平台抽成/厂商自定)", cells: [
          "平台自定(元/百万token)", "美元按量(平台定)", "平台自定+Token Plan", "透传官方价+订阅/免费额", "透传官方价+量包/TPM",
          "透传官方价+TPM保障包", "平台自定+资源包", "低价折扣聚合(低于官网)", "平台自定+月套餐", "订阅+按量",
          "透传+5.5%充值手续费", "按日志量计费(企业议价)", "透传(你付厂商);LiteLLM免费", "美元按量+PTU预留", "算力消耗(美元)" ]},
        { label: "缓存命中计费", cells: [
          "—(以官网)", "—(以官网)", "—(以官网)", "支持(上下文缓存折扣)", "支持(部分模型缓存)",
          "支持(上下文缓存降本)", "—", "支持(缓存命中价极低)", "—", "—",
          "支持(缓存读取价更低)", "支持(语义缓存降本)", "支持(提示缓存)", "支持(缓存降本)", "—" ]},
        { label: "按token计费(输入/输出分开)", cells: [
          "按token(输入输出)", "按token(输入输出)", "按token", "按token(输入输出;Batch半价)", "按token(输入输出)",
          "按token(输入输出)", "按token", "按token(输入输出)", "按token", "按量/订阅",
          "按token(输入输出;无加价)", "按token(用量计费)", "按token(透传厂商价)", "按token", "按用量" ]},
        { label: "后付费(按量/充值)", cells: [
          "按量后付", "按量后付", "按量后付", "按量后付+免费额", "按量后付(小时出账)",
          "按token后付", "按量后付", "按量后付", "按量后付", "订阅/按量",
          "credits充值后付", "按量(企业commits)", "自付厂商(无平台费)", "按量+充值", "按量" ]},
        { label: "预付费(套餐/合约/资源包)", cells: [
          "Coding Plan/团队版", "一站式打包", "Token Plan/TPM包", "Token Plan坐席/资源包", "量包/TPM/专享资源",
          "TPM保障包/模型单元", "资源包折扣", "预留实例", "月套餐(2999-9999)", "定制报价",
          "纯按量(无套餐)", "企业年付/commits", "无(自托管基建)", "PTU预留/专属实例", "企业年协" ]},
        { label: "计费粒度/对账", cells: [
          "控制台Token明细", "平台用量/账单", "计量+账单", "模型监控/调用统计", "账单/调用明细",
          "监控/缓存日志", "费用中心", "用量面板+告警", "积分账单", "基础",
          "活动日志/用量", "成本归因/预算对账", "按key/team/标签对账", "用量面板", "监控" ]}
      ]
    },
    security: {
      rows: [
        { label: "身份权限(RBAC/SSO)", cells: [
          "政企账号/代表处", "企业账号+客户经理", "政企账号体系", "RAM子账号/权限", "主子账号/权限",
          "企业组织/应用", "CAM RBAC", "子账号+告警", "企业子账号", "基础账号",
          "Workspaces成员", "RBAC+SSO/SAML", "RBAC+SSO(企业)", "团队/成员", "企业RBAC" ]},
        { label: "数据脱敏/策略执行", cells: [
          "机密容器(明文不上云)", "全链路加密审计", "国资云合规", "数据不训练/加密", "数据脱敏/访问控制",
          "高阶防护/审核", "腾讯内容安全", "私有化隔离", "国内合规", "私有化隔离",
          "可禁日志/有限", "PII脱敏/Guardrails", "Guardrails/PII脱敏", "专属隔离", "私有部署" ]},
        { label: "历史上下文安全存储", cells: [
          "机密模型服务隔离", "中港合规方案", "国资云存储", "数据隔离存储", "私有资源池",
          "安全互信存储", "腾讯云存储", "私有化存储", "国内存储", "私有化存储",
          "日志可选保留", "区域路由/不出境", "本地存储/不出境", "海外存储", "客户VPC" ]},
        { label: "内容策略(输入/输出审核)", cells: [
          "内容安全(以官网)", "内容安全", "内容审核", "内容安全合规", "内容审核",
          "内容审核/标识", "腾讯内容安全", "基础", "基础", "私有化",
          "有限", "Guardrails/审核", "Guardrails/审核", "基础", "企业合规" ]},
        { label: "出域控制(数据不出境)", cells: [
          "国内/不出境", "中港跨境合规", "国内", "多地域可选境内", "国内",
          "境内/安全互信", "国内", "国内直连", "国内", "私有化不出境",
          "数据经境外转发", "区域路由/不出境", "自托管不出境", "海外节点", "客户VPC" ]},
        { label: "全链路审计", cells: [
          "全链路加密审计", "审计", "合规审计", "调用统计/审计", "账单/调用审计",
          "审计/标识", "云审计", "基础", "企业合规", "有限",
          "基础活动日志", "全链路审计", "审计日志", "基础", "企业合规" ]},
        { label: "安全沙箱/隔离", cells: [
          "机密容器+硬件隔离", "中港合规隔离", "国资云隔离", "数据隔离+加密", "私有资源池隔离",
          "安全沙箱/互信", "腾讯安全", "BYOC/私有化", "国内合规", "私有化隔离",
          "无(境外)", "VPC/区域隔离", "自托管/空气隔离", "专属实例隔离", "VPC/私有" ]},
        { label: "敏感信息脱敏/拦截", cells: [
          "明文不上云", "加密审计", "国资合规", "不训练/加密", "脱敏/访问控制",
          "高阶防护", "内容安全", "私有化", "合规", "私有化",
          "可禁日志", "PII拦截/脱敏", "PII脱敏/拦截", "隔离", "合规" ]}
      ]
    },
    radarDims: ["模型生态", "智能路由", "企业治理", "安全合规", "成本灵活性", "算力网络", "计费能力", "核心特点"],
    radarScores: {
      "移动云 MoMA":     [4,4,5,5,4,5,4,4],
      "CMI AI Hub":      [5,4,4,5,4,5,4,5],
      "天翼云星辰MaaS":  [3,3,5,5,4,5,4,4],
      "阿里云百炼":      [5,4,5,5,5,5,5,5],
      "百度智能云千帆":  [5,3,5,5,5,4,5,4],
      "火山引擎方舟":    [5,4,4,5,5,5,4,5],
      "腾讯云 TokenHub": [4,3,4,4,4,4,4,4],
      "硅基流动":        [4,3,3,4,5,4,5,5],
      "七牛云 AI":       [4,3,4,4,5,3,4,4],
      "秒云":            [3,2,3,3,3,3,3,3],
      "OpenRouter":      [5,5,2,2,4,2,5,5],
      "Portkey":         [4,5,5,5,4,2,4,5],
      "LiteLLM":         [4,5,5,5,5,3,5,5],
      "Together AI":     [4,3,3,3,4,5,4,5],
      "Anyscale":        [3,3,4,4,3,4,3,4]
    },
    summary: {
      "移动云 MoMA": "运营商级'五个统一'聚合平台:政企合规与算网资源最强,三策略智能路由+秒级容灾;海外模型覆盖与协议标准化是短板。",
      "CMI AI Hub": "跨境模型聚合入口:国际旗舰模型齐全、美元同价、中港合规;差异化在'网络+合规+一站式',应用工具链与治理深度待补齐。",
      "天翼云星辰MaaS": "国资云 Token 经营标杆:套餐/TPM 包分层最细,政企渠道强;模型生态与开发者体验弱于头部。",
      "阿里云百炼": "国内最完整 MaaS 底座:通义全系+三方聚合、Token Plan 订阅、RAM 企业治理、免费额度最高;适合企业全链路落地。",
      "百度智能云千帆": "文心+三方聚合,量包/TPM 预付费灵活,数据脱敏与等保合规完善;路由与智能推荐弱于网关型。",
      "火山引擎方舟": "豆包原生+全模态,上下文缓存降本,安全沙箱/互信方案差异化;企业治理与海外覆盖中等。",
      "腾讯云 TokenHub": "依托腾讯云生态,企业账号/监控/安全成熟;本质大云厂商模型服务,跨厂商聚合广度有限。",
      "硅基流动": "开源推理性价比之王,缓存命中价极低、预留实例+私有化补齐生产级;海外旗舰覆盖有限。",
      "七牛云 AI": "国内唯一 OpenAI+Anthropic 双协议,月套餐成本可控;模型规模中等,路由能力一般。",
      "秒云": "轻量化云原生交付,适合私有化项目;平台化能力与模型生态公开信息有限。",
      "OpenRouter": "模型广度与路由全球第一,透传+5.5%手续费、BYOK 灵活;无 SLA/治理、数据出境,生产级 toB 慎用。",
      "Portkey": "企业级治理与可观测标杆:RBAC/SSO/PII脱敏/审计/预算齐全,按日志计费,已被 Palo Alto 收购;不自建推理。",
      "LiteLLM": "自托管开源网关:虚拟Key/预算/Guardrails/审计全有,$0软件、数据不出境、可空气隔离;运维自有。",
      "Together AI": "'模型API+PTU+GPU集群+微调'全栈完整,开源模型首发快;面向海外,国内采购与合规链路长。",
      "Anyscale": "Ray 分布式框架护城河深,适合自建推理的企业;非标准聚合平台,成品模型选择少。"
    },
    /* 差异化共性能力总结:diff=该厂商相对聚合平台基线的独特差异化能力;common=聚合平台应普遍具备的共性能力;diffIdx=差异化指数(0-5),用于能力定位图 */
    diffCommon: {
      "移动云 MoMA": { diffIdx:4, diff:["运营商级'五个统一'(认证/调度/SLA/运维/计费)一站式", "三策略智能路由 + 秒级容灾,算网资源调度最强", "政企合规资质与运营商渠道壁垒"], common:["统一 API 接入", "聚合 300+ 模型", "按 token 计量计费", "密钥/项目/权限管理", "调用监控与基础故障切换"] },
      "CMI AI Hub": { diffIdx:4, diff:["跨境低时延网络 + 中港合规一站式", "国际旗舰模型美元同价直连,省境外支付/合规成本", "贴身运维、专线与企业级 SLA"], common:["统一 API 接入", "多模型聚合", "按 token 计费", "密钥管理", "用量计量与对账"] },
      "天翼云星辰MaaS": { diffIdx:3, diff:["国资云 Token 经营标杆,套餐/TPM 包分层最细", "政企渠道与电信体系壁垒", "资源包确定性算力保障"], common:["统一接入", "模型聚合", "计量计费", "密钥/权限", "监控"] },
      "阿里云百炼": { diffIdx:4, diff:["国内最完整 MaaS 底座:通义全系 + 三方聚合", "Token Plan 订阅 + RAM 企业治理最成熟", "免费额度行业最高(7000 万 tokens/90 天)"], common:["统一 API", "多模型目录", "按 token 计费", "用户/权限/项目", "计量与审计"] },
      "百度智能云千帆": { diffIdx:3, diff:["文心 + 三方聚合,量包/TPM 预付费灵活", "数据脱敏与等保合规体系完善", "企业级知识库/RAG 工具链"], common:["统一接入", "模型市场", "计量计费", "密钥权限", "缓存命中计费"] },
      "火山引擎方舟": { diffIdx:4, diff:["豆包原生 + 全模态(文/图/视频)能力", "上下文缓存大幅降本", "安全沙箱 / 互信隐私计算方案差异化"], common:["统一 API", "多模型", "按 token 计费", "监控计量", "基础路由"] },
      "腾讯云 TokenHub": { diffIdx:2, diff:["依托腾讯云生态,企业账号/监控/安全成熟", "混元 + 主流模型一体化服务"], common:["统一接入", "模型服务", "计量计费", "权限", "基础路由"] },
      "硅基流动": { diffIdx:4, diff:["开源推理性价比之王,缓存命中价极低(低至 0.02 元)", "预留实例 + 私有化(BYOC)补齐生产级", "多元芯片适配(英伟达/昇腾/沐曦)"], common:["统一 API", "多模型聚合", "按 token 计费", "密钥管理", "监控"] },
      "七牛云 AI": { diffIdx:4, diff:["国内唯一 OpenAI + Anthropic 双协议兼容", "企业月度套餐成本可控、无速率限制"], common:["统一接入", "模型聚合", "计量计费", "密钥", "监控"] },
      "秒云": { diffIdx:3, diff:["轻量化云原生交付,适合私有化项目", "低门槛快速落地"], common:["统一接入", "密钥/权限", "计量", "基础路由"] },
      "OpenRouter": { diffIdx:5, diff:["模型广度与路由全球第一(400+ 模型/60+ 供应商)", "透传 + BYOK 灵活,含免费模型", "单 Key 跨供应商自动故障转移"], common:["统一 API", "多模型聚合", "按 token 计费", "单密钥管理", "基础故障转移"] },
      "Portkey": { diffIdx:5, diff:["企业级治理/可观测标杆:RBAC/SSO/PII 脱敏/审计/预算齐全", "40+ 可观测指标,按日志量计费", "已被 Palo Alto 收购,不自建推理"], common:["统一网关接入", "多模型路由", "虚拟 Key", "计量", "故障切换"] },
      "LiteLLM": { diffIdx:5, diff:["自托管开源网关,$0 软件成本", "数据不出境 / 可空气隔离,Guardrails/审计全有", "JWT/OIDC 鉴权,运维自有"], common:["统一 API 抽象", "多模型", "虚拟 Key/预算", "计量", "路由容灾"] },
      "Together AI": { diffIdx:4, diff:["模型 API + PTU + GPU 集群 + 微调全栈完整", "开源模型首发快,专属实例/Batch 折扣"], common:["统一 API", "多模型", "按 token 计费", "密钥", "监控"] },
      "Anyscale": { diffIdx:4, diff:["Ray 分布式框架护城河,适合自建推理", "规模化训练/推理一体化"], common:["模型服务", "API 接入", "计量", "基础路由"] }
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
  cmiModels: [{"name":"GPT-5.6 Terra","cat":"text","in":2.2,"out":13.2,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 图像 输出:文本","tags":"文本生成视觉理解任务推理代码助手","desc":"GPT-5.6 Terra 是 OpenAI GPT-5.6 系列中的均衡型模型，定位介于旗舰级 Sol 版本与高性价比 Luna 版本之间。该模型兼顾性能与成本，适用于日常代码编写、逻辑推理以及智能自主代理任务，性能表现出色，价格约为 Sol 版本的一半。","isNew":true},{"name":"GPT-5.6 Luna","cat":"text","in":0.88,"out":5.28,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 图像 输出:文本","tags":"文本生成视觉理解任务推理","desc":"GPT-5.6 Luna 是 OpenAI GPT-5.6 系列中一款高速、高性价比模型。适用于高并发、低延迟要求的业务场景，例如对话交互、内容分类以及轻量智能代理流程，在同价位档位中具备不俗的推理能力。","isNew":true},{"name":"GPT-5.6 Sol","cat":"text","in":4.4,"out":26.4,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 图像 输出:文本","tags":"文本生成视觉理解任务推理深度思考","desc":"GPT-5.6 Sol 是 OpenAI GPT-5.6 系列的旗舰模型。它适配复杂逻辑推理、代码开发以及智能代理工作流，在命令行操作、多步骤编程任务和长周期复杂问题求解方面表现尤为突出。","isNew":false},{"name":"Claude Opus 4.8","cat":"text","in":5.25,"out":26.25,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理代码助手深度思考多模态视觉理解","desc":"Claude Opus 4.8 在代码编写、视觉理解以及复杂多步骤任务上性能全面增强。面对高难度工作时，推理更缜密、输出更稳定，在专业知识类任务中也能产出更优质的结果。","isNew":false},{"name":"Claude Haiku 4.5","cat":"text","in":0.97,"out":4.85,"unit":"USD/M","ctx":"200K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理代码助手","desc":"Claude Haiku 4.5 是 Anthropic 新一代最快、最具成本效益的模型，非常适合对速度和成本有要求的应用场景。它能在广泛的应用场景中提供接近前沿的性能，并凭借其出色的编码和智能体能力脱颖而出——其合适的速度与成本，足以推动免费产品的开发并支撑高并发的用户体验。","isNew":false},{"name":"Claude Sonnet 4.6","cat":"text","in":2.91,"out":14.55,"unit":"USD/M","ctx":"200K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理代码助手深度思考多模态","desc":"Claude Sonnet 4.6 提供规模化的前沿智能——专为编程、智能体及企业级工作流而设计。","isNew":false},{"name":"Claude Opus 4.6","cat":"text","in":4.85,"out":24.25,"unit":"USD/M","ctx":"200K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理代码助手深度思考多模态","desc":"Anthropic 推出的下一代最智能模型 Claude Opus 4.6，在编码、智能体、计算机应用及企业级工作流等领域均处于行业领先地位。","isNew":false},{"name":"Claude Opus 4.7","cat":"text","in":5.25,"out":26.25,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理代码助手深度思考多模态视觉理解","desc":"Claude Opus 4.7 在代码编写、视觉理解以及复杂多步骤任务上性能全面增强。面对高难度工作时，推理更缜密、输出更稳定，在专业知识类任务中也能产出更优质的结果。","isNew":true},{"name":"MiniMax-M2.5","cat":"text","in":0.2418,"out":0.9672,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"MiniMax 推出的 MiniMax M2.5 是一款面向 Agent（智能体）与复杂工作流的新一代旗舰大模型，采用约 230B 参数的 MoE（Mixture of Experts）架构，但单次推理仅激活约 10B 参数，在保持高性能的同时显著降低推理成本。","isNew":false},{"name":"Gemini 3.1 Flash Image (Nano Banana 2)","cat":"image","in":0.465,"out":2.79,"unit":"USD/M","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 视频 , 输出: 文本 图像","desc":"Gemini 3.1 Flash (Nano Banana 2) 让高品质图像生成与编辑实现大众化普及。该模型还搭载谷歌图片搜索溯源能力，可识别各类小众细分实体对象，并进一步强化视觉理解能力。","isNew":false},{"name":"Gemini 3.1 Flash Lite","cat":"text","in":0.465,"out":1.395,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 音频 视频 输出:文本","tags":"多模态文本生成","desc":"Gemini 3.1 Flash-Lite 是一款低延迟、经济实惠的多模态模型，专为高频率、轻量级任务而优化。该模型支持文本、图片、视频、音频和 PDF 输入，专为高容量的智能体工作流、简单的数据提取以及延迟时间和 API 费用是主要限制的应用而设计。","isNew":false},{"name":"Gemini 3 Pro Image (Nano Banana Pro)","cat":"image","in":1.86,"out":11.16,"unit":"USD/M","ctx":null,"mods":"","tags":"图像生成图像处理 输入: 文本 图像 , 输出: 文本 图像","desc":"Gemini 3 Pro 图像生成模型是谷歌性能最强、功能最全面的图像生成模型。它将逻辑推理能力融入图像生成流程，以此大幅提升画面画质，更好地渲染多语种长文本内容，同时增强画面内容的事实准确性。该模型最高可输出 4K 分辨率图像，还接入谷歌搜索实现图文溯源功能，能够提供更精准、时效性更强的信息支撑。","isNew":false},{"name":"Qwen3.6-Max-Preview","cat":"text","in":1.339,"out":8.034,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成深度思考","desc":"Qwen3.6系列中规模最大、综合能力最强的Max模型Preview版本，当前开放纯文本模型能力供体验。相较于此前发布的Qwen3-Max和Qwen3.6-Plus，本模型在vibe coding能力上进一步提升、coding agent执行更加高效、前端编程开发能力显著提升；长尾知识能力进一步升级。","isNew":true},{"name":"Qwen3.7-Max-Preview","cat":"text","in":2.575,"out":7.725,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成深度思考","desc":"Qwen3.7系列中规模最大、综合能力最强的Max模型预览版，仅支持思考模式，开放纯文本模型能力供体验。主要优化面向用户的通用对话场景，例如知识问答、指令跟随、创意写作等。","isNew":false},{"name":"Qwen3.7-Max","cat":"text","in":2.575,"out":7.725,"unit":"USD/M","ctx":"991K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手深度思考","desc":"Qwen3.7系列中规模最大、综合能力最强的Max模型，当前开放纯文本模型能力供体验。Qwen3.7是面向智能体时代的新一代旗舰模型，核心优势在于智能体能力的广度与深度：在编程、办公与生产力、长周期自主执行方面均能出色胜任各项任务。","isNew":false},{"name":"Deepseek-V4-Pro","cat":"text","in":1.5312,"out":3.0624,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理代码助手深度思考","desc":"旗舰级 MoE 大模型，总参1.6T、激活 49B，原生支持百万级超长上下文。依托海量高质量训练数据，具备顶尖数学逻辑、复杂推理、专业代码与长文本深度解析能力，适配高阶科研、复杂办公、深度智能代理等高难度场景。","isNew":false},{"name":"Qwen3.6-Flash","cat":"text","in":0.2575,"out":1.545,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 输出:文本","tags":"深度思考视觉理解文本生成","desc":"Qwen3.6原生视觉语言系列Flash模型，模型效果相较3.5-Flash显著提升。本模型重点提升agentic coding能力（在多项代码智能体基准上大幅超越前代）、数学推理和代码推理能力；视觉方面在空间智能能力上显著增强，物体定位与目标检测提升尤为突出。","isNew":true},{"name":"Qwen3.7-Plus","cat":"text","in":0.412,"out":1.648,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解多模态代码助手","desc":"Qwen3.7系列中高性价比Plus模型，在强大文本能力的基础上全面升级了视觉-语言能力，同时保持了在编码、工具使用和生产力工作流方面的完整智能体能力。其核心特色为多模态交互混合智能体能力，能够感知真实世界场景、读取屏幕并操作 GUI、基于视觉参考生成代码、端到端导航移动应用。","isNew":false},{"name":"Qwen3.6-Plus","cat":"text","in":0.515,"out":3.09,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 输出:文本","tags":"深度思考视觉理解文本生成","desc":"Qwen3.6原生视觉语言系列Plus模型，展现出与当前顶尖前沿模型相媲美的卓越性能，模型效果相较3.5系列显著提升。模型在Agentic coding、前端编程、Vibe coding等代码能力、多模态万物识别、OCR、物体定位等能力上显著增强。","isNew":false},{"name":"Gemini 3.5 Flash","cat":"text","in":1.365,"out":8.19,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理代码助手","desc":"Gemini 3.5 Flash 具备接近专业级别的智能体能力，同时兼顾极致响应速度与高性价比。Gemini 3 系列属于思考型模型，能够先自主推演梳理逻辑再给出回复，有效提升整体表现与作答准确率。","isNew":true},{"name":"Qwen3.6-35B-A3B","cat":"text","in":0.38625,"out":2.3175,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解","desc":"Qwen3.6系列35B-A3B原生视觉语言模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。模型效果相较3.5-35B-A3B显著提升了agentic coding能力、数学推理和代码推理能力、空间智能能力、物体定位与目标检测能力。","isNew":false},{"name":"DeepSeek-V4-Flash","cat":"text","in":0.1672,"out":0.4488,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理代码助手","desc":"高效轻量化MoE模型，总参284B，激活13B，原生支持百万超长上下文能力。推理速度快、延迟低、调用成本低廉，综合能力均衡，主打高并发、轻量化任务，适合日常对话、内容创作、基础 RAG、批量文案处理等普惠刚需场景。","isNew":true},{"name":"Qwen3.6-27B","cat":"text","in":0.618,"out":3.708,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解","desc":"Qwen3.6系列27B原生视觉语言Dense模型，模型效果相较3.5-27B重点提升了Agentic coding能力、模型STEM与推理能力进一步增强；视觉模态方面在空间智能、物体定位与检测能力上显著增强，视频理解、文档OCR及视觉Agent能力稳步提升。","isNew":true},{"name":"GPT-5.3-Codex","cat":"text","in":1.54,"out":12.32,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考代码助手","desc":"GPT-5.3-Codex 是 OpenAI 最先进的代理编码模型，结合了 GPT-5.2-Codex 的前沿软件工程性能与 GPT-5.2 更广泛的推理和专业知识能力。","isNew":true},{"name":"GPT-5.5","cat":"text","in":4.4,"out":26.4,"unit":"USD/M","ctx":"922K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态代码助手","desc":"GPT-5.5 是 OpenAI 目前最先进的具备智能自主代理能力的 AI 模型，可自主规划并完成编码、调研、数据分析等复杂多步骤任务，只需极少人工指令引导，同时在运行效率与综合智能水平上实现全面升级。","isNew":true},{"name":"DeepSeek-V3.2-Speciale","cat":"text","in":0.5104,"out":1.4784,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"引入了DeepSeek Sparse Attention（一种稀疏注意力机制）的实验性质版本，针对长文本的训练和推理效率进行了探索性的优化和验证。","isNew":true},{"name":"DeepSeek-V3.2","cat":"text","in":0.5104,"out":1.4784,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"DeepSeek-V3.2是引入DeepSeek Sparse Attention（一种稀疏注意力机制）的正式版模型，也是DeepSeek推出的首个将思考融入工具使用的模型，同时支持思考模式与非思考模式的工具调用。","isNew":false},{"name":"DeepSeek-V3.1","cat":"text","in":1.0824,"out":4.3472,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"DeepSeek-V3.1为混合推理架构模型，同时支持思考模式与非思考模式，具备更高的推理效率和更强的Agent能力。","isNew":false},{"name":"DeepSeek-R1","cat":"text","in":1.188,"out":4.752,"unit":"USD/M","ctx":"320K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能较高，能力较强。","isNew":false},{"name":"DeepSeek-R1-0528","cat":"text","in":1.188,"out":4.752,"unit":"USD/M","ctx":"320K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"0528为R1模型的小版本升级，相较于旧版 R1，新版在复杂推理任务中的表现有了显著提升。在数学、编程与通用逻辑等多个基准测评中取得了优异成绩。","isNew":false},{"name":"ByteDance-Seed-1.6","cat":"text","in":0.2375,"out":1.9,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态","desc":"ByteDance-Seed-1.6 全新的多模态深度思维模型，支持文本和视觉输入，并具备增强的推理能力。其特点是拥有 256K 的上下文窗口，可输出最多 32K 词元。","isNew":false},{"name":"ByteDance-Seed-1.6-Flash","cat":"text","in":0.07125,"out":0.285,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态","desc":"ByteDance-Seed-1.6-flash 是一款超快的多模态深度思维模型，支持文本和视觉理解。它拥有 256k 的上下文窗口，并能生成最多 16k 词元的输出。","isNew":true},{"name":"ByteDance-Seed-1.8","cat":"text","in":0.2375,"out":1.9,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解多模态","desc":"这是一款专为多模态智能体场景优化设计的新模型，不仅实现了智能体能力的全面增强，更在多模态理解维度上完成升级，并赋予其更灵活的上下文管理机制。","isNew":true},{"name":"ByteDance-Seed-2.0-mini","cat":"text","in":0.095,"out":0.38,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态","desc":"专为低延迟、高并发、成本敏感型应用场景打造，具备灵活部署、四层思维与多模态理解能力。","isNew":true},{"name":"ByteDance-Seed-2.0-lite","cat":"text","in":0.2375,"out":1.9,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态","desc":"一种成本效益高、吞吐量大的企业级模型，性能优于ByteDance-Seed-1.8，具备强大的长上下文理解能力，并为核心生产工作流提供可靠结构化输出。","isNew":false},{"name":"GPT-OSS-120b","cat":"text","in":0.095,"out":0.475,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-OSS-120b提供了高性能、开放和可控的LLM——将前沿推理技能与企业级灵活性和部署自主性相结合。","isNew":true},{"name":"GPT-5.4-Mini","cat":"text","in":0.66,"out":3.96,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.4 mini 将 GPT-5.4 的核心能力带入一个更快、更高效的模型，优化用于高通量工作负载。它支持文本和图像输入，在推理、编码和工具使用方面表现优异，同时降低大规模部署的延迟和成本。","isNew":true},{"name":"GPT-5.4-Nano","cat":"text","in":0.176,"out":1.1,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.4 nano 是 GPT-5.4 家族中最轻量化、最具成本效益的变体，针对速度要求和高流量任务进行了优化。它支持文本和图像输入，设计用于低延迟的应用场景，如分类、数据提取、排名和子代理执行。","isNew":true},{"name":"GPT-5.4","cat":"text","in":2.2,"out":13.2,"unit":"USD/M","ctx":"1050K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.4 是 OpenAI 最新的前沿模型，将 Codex 和 GPT 系列整合为一个系统。它配备了1M+令牌上下文窗口（922K输入，128K输出），支持文本和图像输入，支持同一工作流程中的高上下文推理、编码和多模态分析。","isNew":true},{"name":"GPT-5.4-Pro","cat":"text","in":26.4,"out":158.4,"unit":"USD/M","ctx":"1050K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.4 Pro是OpenAI最先进的模型，基于GPT-5.4的统一架构，增强了针对复杂高风险任务的推理能力。它配备了1M+令牌上下文窗口（922K输入，128K输出），支持文本和图像输入。GPT-5.4 Pro 优化于逐步推理、指令跟随和准确性，擅长代理编码、长上下文工作流程和多步骤问题解决。","isNew":true},{"name":"Dreamina-Seedance-2.0-fast","cat":"video","in":null,"out":3.465,"unit":"USD/M","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 音频 , 输出: 视频","desc":"Seedance 2.0 fast是豆包大模型团队推出的新一代多模态视频创作模型，它继承了Seedance 2.0模型的核心功能和优势，生成速度更快。","isNew":true},{"name":"Dreamina-Seedance-2.0","cat":"video","in":null,"out":4.935,"unit":"USD/M","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 音频 , 输出: 视频","desc":"由字节跳动自研的新一代专业级多模态视频创作模型，支持图像、视频、音频等多模态参考输入，可实现视频生成。","isNew":true},{"name":"Wan2.7-Videoedit","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 视频 , 输出: 视频","desc":"万相2.7-视频编辑，自然语言指令编辑视频，支持局部或全局编辑，可参考图像替换视频元素，支持复刻视频动作、特效、运镜等动态过程。","isNew":true},{"name":"Wan2.7-T2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频","desc":"万相2.7-文生视频，演绎能力全面升级，文戏情感细腻自然，动作戏激烈拳拳到肉，搭配更富有戏剧性和节奏感的镜头切换，实现更强表演能力。","isNew":true},{"name":"Wan2.7-R2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 视频 , 输出: 视频","desc":"万相2.7-参考生视频，更加稳定的角色、道具与场景参考，支持最大5个图/视频混合参考，支持音频音色参考，搭配基础能力升级实现更强表演能力。","isNew":true},{"name":"Wan2.7-I2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 音频 , 输出: 视频","desc":"万相2.7-图生视频，演绎能力全面升级，文戏情感细腻自然，动作戏激烈拳拳到肉，搭配更富有戏剧性和节奏感的镜头切换，实现更强表演能力。","isNew":false},{"name":"Wan2.6-R2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 视频 , 输出: 视频 音频","desc":"通义万相2.6-参考生视频，支持指定人物或任意物品进行参考，精准保持形象和声音的一致性，支持多角色参考合拍","isNew":false},{"name":"Wan2.6-R2v-Flash","cat":"video","in":null,"out":0.07725,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 视频 , 输出: 视频 音频","desc":"万相2.6-参考生视频-Flash，生成更快性价比更高。支持指定人物或任意物品进行参考，精准保持形象和声音的一致性，支持多角色参考合拍","isNew":false},{"name":"Wan2.5-I2v-Preview","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频","desc":"通义万相2.5-图生视频-Preview，全新升级技术架构，支持与画面同步的声音生成，支持10秒长视频生成，更强的指令遵循能力，运动能力、画面质感进一步提升。","isNew":false},{"name":"Wan2.6-I2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 音频 , 输出: 视频 音频","desc":"通义万相2.6-图生视频，智能分镜调度支持多镜头叙事，更高品质的声音生成，多人稳定对话，更自然真实音色，最高支持15秒时长生成","isNew":false},{"name":"Wan2.6-I2v-Flash","cat":"video","in":null,"out":0.07725,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 音频 , 输出: 视频 音频","desc":"万相2.6-图生视频-Flash，生成更快更高性价比。智能分镜调度支持多镜头叙事，多人稳定对话，更自然真实音色，最高支持15秒时长生成","isNew":false},{"name":"Wan2.2-T2v-Plus","cat":"video","in":null,"out":0.103,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 , 输出: 视频","desc":"全新升级的通义万相2.2文生视频，视频品质更高。可稳定生成大幅度复杂运动，支持影视级画面表现与控制，更强大的指令遵循能力，实现物理世界还原。","isNew":false},{"name":"Wan2.5-T2v-Preview","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 , 输出: 视频","desc":"通义万相2.5-文生视频-预览，全新升级模型架构，支持与画面同步的声音生成，支持10秒长视频生成，更强的指令遵循能力，运动能力、画面质感进一步提升。","isNew":false},{"name":"Wan2.6-T2v","cat":"video","in":null,"out":0.1545,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"通义万相2.6-文生视频，智能分镜调度支持多镜头叙事，能够生成主体、场景和氛围一致的多镜头叙事视频，最高支持15秒时长，更高品质的声音生成，更好的指令遵循和视觉质量","isNew":false},{"name":"Wan2.1-Vace-Plus","cat":"video","in":null,"out":0.103,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 视频 , 输出: 视频","desc":"通义万相2.1-VACE-Plus，视频编辑统一模型。支持局部编辑、视频重绘、背景扩展、时长延展、图片参考等多种视频编辑与生成任务，支持文本、图像、视频等多模态条件控制。","isNew":false},{"name":"Wan2.2-T2i-Plus","cat":"image","in":null,"out":0.0515,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"全新升级的通义万相2.2文生图，更丰富的画面细节。在生成图像创意性、稳定性、写实质感方面全面升级，指令遵循更强，原生支持多种风格。支持最大200万像素生成，支持智能提示词改写等。","isNew":false},{"name":"Wan2.2-T2i-Flash","cat":"image","in":null,"out":0.02575,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"全新升级的通义万相2.2文生图，更快的生成速度。在生成图像创意性、稳定性、写实质感方面全面升级，指令遵循更强，原生支持多种风格。支持最大200万像素生成，支持智能提示词改写等。","isNew":false},{"name":"Wan2.5-T2i-Preview","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"通义万相2.5-文生图-Preview，全新升级模型架构。画面美学、设计感、真实质感显著提升，精准指令遵循，擅长中英文和小语种文字生成，支持复杂结构化长文本和图表、架构图等内容生成。","isNew":false},{"name":"Wan2.5-I2i-Preview","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"通义万相2.5-图像编辑-Preview，全新升级模型架构。支持指令控制实现丰富的图像编辑能力，指令遵循能力进一步提升，支持高一致性保持的多图参考生成，文字生成表现优异。","isNew":true},{"name":"Wan2.7-Image-Pro","cat":"image","in":null,"out":0.07725,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"万相2.7-图像生成与编辑旗舰版模型，支持文生图、文生组图、图生组图、图像编辑、多图参考生成、交互式编辑，在文字渲染、主体一致性、复杂指令遵循上都有更强表现。","isNew":true},{"name":"Wan2.7-Image","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"万相2.7-图像生成与编辑，支持文生图、文生组图、图生组图、图像编辑、多图参考生成、交互式编辑，在文字渲染、主体一致性、复杂指令遵循上都有更强表现","isNew":false},{"name":"Wan2.6-T2i","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"通义万相2.6-文生图，画面质感、美学表现、指令遵循升级，在艺术风格精准控制、真实感人像、长文本生图及广泛历史文化IP覆盖上均表现出卓越能力，可生成高质量且富有表现力的视觉内容。","isNew":false},{"name":"Qwen-Image-Edit-Max","cat":"image","in":null,"out":0.07725,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"千问图像编辑模型Max系列，提供更稳定、更丰富的编辑能力：提升工业设计与几何推理能力；提升角色一致性；减轻偏移问题；集成Lora能力，可以进行更多功能的图像编辑。","isNew":false},{"name":"Qwen-Image-Edit","cat":"image","in":null,"out":0.04635,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"通义千问系列首个图像编辑模型，成功将Qwen-Image的文本渲染能力拓展到编辑任务上。支持精准的中英双语文字编辑、视觉外观与语义双重编辑、具备强大的跨基准性能表现。","isNew":false},{"name":"Qwen-Image-Edit-Plus","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 图像 , 输出: 图像","desc":"通义千问系列图像编辑Plus模型，在首版Edit模型基础上进一步优化了推理性能与系统稳定性，大幅缩短图像生成与编辑的响应时间；支持单次请求返回多张图片，显著提升用户体验。","isNew":true},{"name":"Qwen-Image-2.0","cat":"image","in":null,"out":0.03605,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"Qwen-Image-2.0系列加速版模型，实现了图片生成和图片编辑的融合；具备更专业的文字渲染1k token指令支持能力、更细腻的真实质感，细腻刻画写实场景、更强的语义遵循能力。加速版有效实现了模型效果和性能的最佳平衡。","isNew":false},{"name":"Qwen-Image-2.0-Pro","cat":"image","in":null,"out":0.07725,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"Qwen-Image-2.0系列满血版模型，实现了图片生成和图片编辑的融合；具备更专业的文字渲染1k token指令支持能力、更细腻的真实质感，细腻刻画写实场景、更强的语义遵循能力。满血版具备2.0系列最强的文字渲染能力和真实质感。","isNew":false},{"name":"Qwen-Image-Max","cat":"image","in":null,"out":0.07725,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"千问图像生成模型Max系列，在各类生成任务中表现出色，相较Plus系列大幅度降低生成图片的AI感，提升图像真实性；具备更真实的人物质感、更细腻的自然纹理、更美观的文字渲染。","isNew":false},{"name":"Qwen-Image","cat":"image","in":null,"out":0.03605,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"通义千问系列首个图像生成模型，参数规模200亿。具备卓越的文本渲染能力，在复杂文本渲染、各类生成与编辑任务重表现出色，在多个公开基准测试中获得SOTA。","isNew":false},{"name":"Qwen-Image-Plus","cat":"image","in":null,"out":0.0309,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 , 输出: 图像","desc":"通义千问系列图像生成模型，参数规模200亿。具备卓越的文本渲染能力，在复杂文本渲染、各类生成与编辑任务重表现出色，在多个公开基准测试中获得SOTA，模型性能大幅提升。","isNew":false},{"name":"Seedance-1.0-Pro-Fast","cat":"video","in":null,"out":0.095,"unit":"USD/M","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频","desc":"Seedance 1.0 Pro Fast 以无可匹敌的价格提供顶级性能，在质量、速度和成本之间实现了完美平衡。它基于 Seedance 1.0 Pro 的核心优势打造，为创作者提供了更快速、更具成本效益的体验。","isNew":false},{"name":"Seedance-1.5-Pro","cat":"video","in":null,"out":1.14,"unit":"USD/M","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Seedance 1.5 助创作者与企业真正掌握导演级控制权，生成影视级视频与原生同步音频，实现支持高精度唇形同步的多语言对话。","isNew":false},{"name":"Seedance-1.0-Pro","cat":"video","in":null,"out":2.375,"unit":"USD/M","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频","desc":"这是一款支持多镜头叙事的视频生成模型。它在语义理解和指令跟随方面表现出色，能够生成流畅、细腻且具有电影感的1080P高清视频","isNew":false},{"name":"Veo 3.1Fast","cat":"video","in":null,"out":0.135,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Veo 3.1 Fast 图像生成版利用谷歌先进的视频生成模型，将创意构思转化为引人入胜的视频叙事。Veo 能够根据文本提示生成带音频的视频，或在文本指导下将图片动画化。","isNew":false},{"name":"Veo 3.1 Lite","cat":"video","in":null,"out":0.045,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Veo 3.1 Lite for Generation 借助谷歌先进的视频生成模型，将创意构思转化为富有感染力的视频叙事内容。Veo 可根据文本提示生成带音频的视频，或在文本指令驱动下为图像添加动画效果。","isNew":false},{"name":"Gemini 3.1 Flash Image Preview","cat":"image","in":0.45,"out":2.7,"unit":"USD/M","ctx":null,"mods":"","tags":"文本生成图像生成 输入: 文本 图像 , 输出: 文本 图像","desc":"Gemini 3.1 Flash Image 使高质量图像生成和编辑功能成为主流。该模型还首次引入了基于 Google 图片搜索的 Grounding 技术，以实现长尾实体识别并增强视觉理解。","isNew":true},{"name":"Seedream-5.0-lite","cat":"image","in":null,"out":0.03325,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"BytePlus 发布的最新图像生成模型。该模型的推理与理解能力进一步升级，能够准确解读复杂的提示词和视觉输入。","isNew":false},{"name":"Veo 3.1","cat":"video","in":null,"out":0.36,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Veo 3.1 图像生成版利用谷歌先进的视频生成模型，将创意构思转化为引人入胜的视频叙事。Veo 能够根据文本提示生成带音频的视频，或在文本指导下将图片动画化。","isNew":false},{"name":"Veo3 Fast","cat":"video","in":null,"out":0.135,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Veo 3 Fast 利用谷歌先进的视频生成模型，将创意构思转化为引人入胜的视频叙事。它能够根据文本提示和图像生成带音频的视频。","isNew":false},{"name":"Veo 3","cat":"video","in":null,"out":0.36,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频 音频","desc":"Veo 3 利用谷歌先进的视频生成模型，将创意构思转化为引人入胜的视频叙事。Veo 能够根据文本提示和图像生成带音频的视频。","isNew":false},{"name":"GPT-Image-1","cat":"image","in":4.4,"out":35.2,"unit":"USD/M","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 文本 图像","desc":"Gpt-image-1包括图像生成方面的重大改进:它可以在具有挑战性的场景和解决具有挑战性的提示时生成高质量的图像。目前，该模型在图像内画、照片真实感照片和线框设计方面具有强大类拍摄能力。","isNew":false},{"name":"GPT-Image-1-Mini","cat":"image","in":1.76,"out":7.04,"unit":"USD/M","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"GPT-image-1-mini以GPT-image-1为基础构建，它是一款成本更低的模型，即便在复杂场景下也能生成高质量图像，且图像具备逼真的写实效果。该模型拥有GPT-image-1的全部功能，仅不支持人脸特征保留功能","isNew":false},{"name":"Seedream-4.5","cat":"image","in":null,"out":0.038,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"Seedream 4.5 是最新的图像模型，它提供了更好的编辑一致性、改进的多图像融合能力、更精细的细节控制，能生成自然的小文字和人脸，并创造出和谐、具有美感的视觉效果。","isNew":false},{"name":"Seedream-4.0","cat":"image","in":null,"out":0.0285,"unit":"USD/img","ctx":null,"mods":"","tags":"图像生成 输入: 文本 图像 , 输出: 图像","desc":"Seedream 4.0 是一款最先进的多模态图像生成模型，它能够在一个单一模型中实现文生图、图像编辑和多图像生成，支持广泛的创意场景。","isNew":false},{"name":"Veo2","cat":"video","in":null,"out":0.45,"unit":"USD/s","ctx":null,"mods":"","tags":"视频生成 输入: 文本 图像 , 输出: 视频","desc":"Veo 2 图像生成版利用谷歌先进的视频生成模型，将创意构思转化为引人入胜的视频叙事。Veo 能够根据文本提示生成视频。借助可选的提示增强功能，即使是简单的提示也能创建出细节丰富的视觉内容。","isNew":false},{"name":"Gemini 2.5 Flash Image(NanoBanana)","cat":"image","in":null,"out":0.0351,"unit":"USD/M","ctx":null,"mods":"","tags":"文本生成图像生成 输入: 文本 图像 , 输出: 文本 图像","desc":"Gemini 2.5 Flash Image 是一款通用的多模态模型，能够生成高质量图像，并对输入图像进行精确编辑，同时保持高度的一致性。","isNew":true},{"name":"GPT-5.3-Chat","cat":"text","in":1.54,"out":12.32,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.3-Chat 是对ChatGPT最常用模型的升级，使日常对话更加流畅、实用且直接实用。它能提供更准确的答案，更好地提供上下文，显著减少不必要的拒绝、附加条件和过于谨慎的措辞，避免打断对话流畅。","isNew":true},{"name":"GPT-5.2-Codex","cat":"text","in":1.54,"out":12.32,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考代码助手","desc":"GPT-5.2-Codex 是 GPT-5.1-Codex 的升级版，针对软件工程和编码工作流程进行了优化。它既适合交互式开发会话，也适合长时间独立执行复杂工程任务。该模型支持从零构建项目、功能开发、调试、大规模重构和代码审查。","isNew":true},{"name":"GPT-5.2","cat":"text","in":1.54,"out":12.32,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.2 基于 GPT-5.1 版本迭代升级，通过多项改进让交互体验更可靠、更灵活、更人性化。该版本的核心优化方向在于输出更清晰的应答内容、提升多场景适配能力，并增强各类任务下的可控性。","isNew":true},{"name":"GPT-5.2-Chat","cat":"text","in":1.54,"out":12.32,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.2-chat 可提供高效且支持上下文感知的对话体验，兼具自适应推理能力与可靠的安全防护机制。该模型首次在对话功能中引入思维链技术，将人机交互体验推向全新高度。","isNew":false},{"name":"GPT-5.1","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.1 基于 GPT-5 版本迭代优化，通过多项改进让交互体验更可靠、更灵活、更人性化。该版本的核心发力点在于输出更清晰的应答内容、提升多场景适配能力，并增强各类任务下的可控性","isNew":false},{"name":"GPT-5.1-Chat","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5.1-chat是 5.1 系列中一款高效轻量的产品，在保留强大通用智能的同时，针对低延迟对话场景进行了专项优化。该模型采用自适应推理机制，面对高难度问题时会选择性地深度思考，既能提升数学计算、代码编写及多步骤任务的完成准确率，又不会拖慢日常对话的响应速度。其默认的交互风格更显亲和自然，对话感更强，不仅指令遵循能力更出色，在短文本推理任务中的表现也更为稳定。","isNew":false},{"name":"GPT-5.1-Codex","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成代码助手","desc":"GPT-5.1-Codex 是 GPT-5.1 的专用版本，针对软件工程与代码开发流程进行了专项优化。该模型既可支持交互式开发会话，也能独立完成复杂工程任务的长时运行。其功能覆盖从项目从零搭建、功能开发、程序调试，到大规模代码重构与代码评审的全流程开发环节。","isNew":false},{"name":"GPT-5.1-Codex-Mini","cat":"text","in":0.22,"out":1.76,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成代码助手","desc":"GPT-5.1-Codex-Mini 是 GPT-5.1-Codex 的轻量高速版本。","isNew":false},{"name":"GPT-5.1-Codex-Max","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成代码助手","desc":"GPT-5.1-Codex-Max 是 OpenAI 推出的最新智能体编码模型，专为长时运行、高上下文的软件开发任务打造。该模型基于升级版 5.1 推理架构开发，并在涵盖软件工程、数学及科研领域的智能体工作流数据集上完成训练。","isNew":false},{"name":"GPT-5","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5 是 OpenAI 研发的最先进模型，在推理能力、代码质量与用户体验方面实现了重大突破。该模型针对需分步推理、严格遵循指令的复杂任务，以及高风险场景下对准确性有严苛要求的任务进行了专项优化。","isNew":false},{"name":"GPT-5-Mini","cat":"text","in":0.22,"out":1.76,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5 Mini 是 GPT-5 的轻量版本，专为处理轻量级推理任务而设计。该模型具备与 GPT-5 相同的指令遵循能力及安全调优特性，同时实现了更低的延迟与成本。GPT-5 Mini 是 OpenAI 旗下 o4-mini 模型的迭代升级版本。","isNew":false},{"name":"GPT-5-Nano","cat":"text","in":0.044,"out":0.352,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"GPT-5-Nano 是 GPT-5 系列中体量最小、运行速度最快的型号，专为开发者工具、快速交互场景以及超低延迟环境量身优化。尽管与系列中更大型的版本相比，其推理深度存在局限，但它仍保留了核心的指令遵循能力与安全特性。该模型是 GPT-4.1-nano 的迭代版本，为对成本敏感或有实时处理需求的应用场景，提供了轻量级的选择方案。","isNew":false},{"name":"GPT-5-Chat","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"GPT-5 对话模型专为企业级应用打造，可提供高级、自然、多模态且支持上下文感知的对话功能。","isNew":false},{"name":"GPT-5-Codex","cat":"text","in":1.1,"out":8.8,"unit":"USD/M","ctx":"400K","mods":"输入:文本 图像 输出:文本","tags":"文本生成代码助手","desc":"GPT-5-Codex 是针对软件工程和编码工作流程优化的GPT-5专用版本。它既适合交互式开发会话，也适合长时间独立执行复杂工程任务。该模型支持从零构建项目、功能开发、调试、大规模重构和代码评审。","isNew":false},{"name":"GPT-4.1","cat":"text","in":1.76,"out":7.04,"unit":"USD/M","ctx":"1047K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"GPT-4.1 是一款旗舰大型语言模型，优化于高级指令跟踪、真实软件工程和长上下文推理。","isNew":false},{"name":"GPT-4.1-Nano","cat":"text","in":0.088,"out":0.352,"unit":"USD/M","ctx":"1047K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"对于需要低延迟的任务，GPT-4.1 nano是GPT-4.1系列中最快且最便宜的模型。它在小体积内表现出色，拥有100万令牌上下文窗口，MMLU得分为80.1%，GPQA得分50.3%，Aider多语种编码得分9.8%，甚至超过GPT-4o mini。它非常适合分类或自动完成等任务。","isNew":false},{"name":"GPT-4.1-Mini","cat":"text","in":0.352,"out":1.408,"unit":"USD/M","ctx":"1047K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"GPT-4.1 Mini是一款中型模型，性能可与GPT-4o媲美，且延迟和成本显著降低","isNew":false},{"name":"Codex-Mini","cat":"text","in":1.32,"out":5.28,"unit":"USD/M","ctx":"300K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理深度思考","desc":"Codex-Mini 是 o4-mini 模型的微调版本，专为命令行界面开发流程中的开发者打造，可提供响应迅速且精准遵循指令的性能表现。","isNew":false},{"name":"Mistral-Large-3","cat":"text","in":0.44,"out":1.32,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"Mistral Large 3 在遵循指令、维持多轮对话上下文、以及在冗长或复杂交流中保持连贯性方面，表现位列最佳开放模型之一。它能以稳定的准确度处理长文本输入和多模态内容，相比大多数同类模型，展现出更少的性能骤降和更可预测的结果。这种均衡的特性使其非常适用于生产级智能助手、检索增强系统和多模态应用。","isNew":true},{"name":"Qwen3.5-35B-A3B","cat":"text","in":0.2575,"out":2.06,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"深度思考视觉理解文本生成","desc":"Qwen3.5系列35B-A3B原生视觉语言模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。该模型的综合表现接近于Qwen3.5-27B。","isNew":true},{"name":"Qwen3.5-27B","cat":"text","in":0.309,"out":2.472,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"深度思考视觉理解文本生成","desc":"Qwen3.5系列27B原生视觉语言Dense模型，融合了线性注意力机制；响应速度快，兼具推理速度和性能。该模型的综合能力接近于Qwen3.5-122B-A10B。","isNew":true},{"name":"Qwen3.5-122B-A10B","cat":"text","in":0.412,"out":3.296,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"深度思考视觉理解文本生成","desc":"Qwen3.5系列122B-A10B原生视觉语言模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。该模型的综合表现仅次于Qwen3.5-397B-A17B，文本能力显著优于Qwen3-235B-2507，视觉能力优于Qwen3-VL-235B。","isNew":false},{"name":"Llama-4-Maverick","cat":"text","in":0.22,"out":0.88,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 输出:文本","tags":"文本生成任务推理","desc":"对于视觉，Llama 4模型还针对视觉识别、图像推理、字幕和回答关于图像的一般问题进行了优化。Llama 4模型集合还支持利用其模型的输出来改进其他模型的能力，包括合成数据生成和提取。","isNew":false},{"name":"Llama-3.3-70B-Instruct","cat":"text","in":0.6248,"out":0.6248,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"Llama 3.3 指令微调纯文本模型针对多语言对话场景进行了优化，在主流行业基准测试中，其性能优于市面上多款开源及闭源对话模型。","isNew":true},{"name":"Qwen3.5-Plus","cat":"text","in":0.412,"out":2.472,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解","desc":"Qwen3.5原生视觉语言系列Plus模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。在多项任务评测中，3.5系列均展现出与当前顶尖前沿模型相媲美的卓越性能，模型效果在纯文本与多模态方面相较3系列均实现飞跃式进步。","isNew":true},{"name":"Qwen3.5-Flash","cat":"text","in":0.103,"out":0.412,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解","desc":"Qwen3.5原生视觉语言系列Flash模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。模型效果在纯文本与多模态方面相较3系列均实现飞跃式进步；响应速度快，兼具推理速度和性能。","isNew":true},{"name":"Qwen3.5-397B-A17B","cat":"text","in":0.618,"out":3.708,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"文本生成深度思考视觉理解","desc":"Qwen3.5系列397B-A17B原生视觉语言模型，基于混合架构设计，融合了线性注意力机制与稀疏混合专家模型，实现了更高的推理效率。在语言理解、逻辑推理、代码生成、智能体任务、图像理解、视频理解、图形用户界面（GUI）等多种任务中，均展现出与当前顶尖前沿模型相媲美的卓越性能。具备强大的代码生成与智能体能力，对于各类智能体场景具有良好的泛化性。","isNew":false},{"name":"Qwen3-Max","cat":"text","in":1.236,"out":6.18,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"通义千问3系列Max模型，相较preview版本在智能体编程与工具调用方向进行了专项升级。本次发布的正式版模型达到领域SOTA水平，适配场景更加复杂的智能体需求。","isNew":false},{"name":"Qwen3-Max-Preview","cat":"text","in":1.236,"out":6.18,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"通义千问3系列Max模型Preview版本，实现思考模式和非思考模式的有效融合。思考模式下在智能体编程能力、常识知识推理能力、数学/科学/通用类推理等能力上均有显著增强。","isNew":false},{"name":"Qwen-Max","cat":"text","in":1.648,"out":6.592,"unit":"USD/M","ctx":"32K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"通义千问2.5系列千亿级别超大规模语言模型，支持中文、英文等不同语言输入。随着模型的升级，qwen-max将滚动更新升级。如果希望使用固定版本，请使用历史快照版本。","isNew":false},{"name":"Qwen-Max-Latest","cat":"text","in":1.648,"out":6.592,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"通义千问系列效果最好的模型，本模型是动态更新版本，模型更新不会提前通知，适合复杂、多步骤的任务，模型中英文综合能力显著提升，模型人类偏好显著提升，模型推理能力和复杂指令理解能力显著增强，困难任务上的表现更优，数学、代码能力显著提升，提升对Table、JSON等结构化数据的理解和生成能力。","isNew":false},{"name":"Qwen-Plus","cat":"text","in":0.412,"out":1.236,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"Qwen3系列Plus模型，实现思考模式和非思考模式的有效融合，可在对话中切换模式。推理能力显著超过QwQ、通用能力显著超过Qwen2.5-Plus，达到同规模业界SOTA水平。","isNew":false},{"name":"Qwen-Plus-Latest","cat":"text","in":0.412,"out":1.236,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"通义千问系列能力均衡的模型，推理效果和速度介于通义千问-Max和通义千问-Turbo之间，适合中等复杂任务。本模型是动态更新版本，模型更新不会提前通知。","isNew":false},{"name":"Qwen-Flash","cat":"text","in":0.0515,"out":0.412,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"Qwen3系列Flash模型，实现思考模式和非思考模式的有效融合，可在对话中切换模式。复杂推理类任务性能优秀，指令遵循、文本理解等能力显著提高。支持1M上下文长度，按照上下文长度进行阶梯计费。","isNew":false},{"name":"Qwen3-VL-Plus","cat":"text","in":0.206,"out":1.648,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解深度思考","desc":"Qwen3系列视觉理解模型，实现思考模式和非思考模式的有效融合，视觉智能体能力在OS World等公开测试集上达到世界顶尖水平。此版本在视觉coding、空间感知、多模态思考等方向全面升级；视觉感知与识别能力大幅提升，支持超长视频理解。","isNew":false},{"name":"Qwen3-VL-Flash","cat":"text","in":0.0515,"out":0.412,"unit":"USD/M","ctx":"256K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解深度思考","desc":"Qwen3系列小尺寸视觉理解模型，实现思考模式和非思考模式的有效融合，效果优于开源版Qwen3-VL-30B-A3B，响应速度快。全面升级图像/视频理解，支持长视频长文档等超长上下文、空间感知与万物识别；具备视觉2D/3D定位能力，胜任复杂现实任务。","isNew":false},{"name":"Qwen3-Coder-Plus","cat":"text","in":1.03,"out":5.15,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手","desc":"基于Qwen3的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程、代码能力卓越的同时兼具通用能力。","isNew":true},{"name":"Qwen3-Coder-Next","cat":"text","in":0.309,"out":1.545,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手","desc":"Qwen3系列新一代代码生成模型，效果接近Qwen3-Coder-Plus兼具更优性能。模型重点优化仓库级别理解、支持多轮工具交互、提升对于agentic coding类工具的适配能力。","isNew":false},{"name":"Qwen3-Coder-Flash","cat":"text","in":0.309,"out":1.545,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手","desc":"基于Qwen3的代码生成模型，继承Qwen3-Coder-Plus的coding agent能力，支持多轮工具交互，重点优化仓库级别理解能力并增加工具调用稳定性。","isNew":false},{"name":"Qwen3-Next-80B-A3B-Thinking","cat":"text","in":0.1545,"out":1.236,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"基于Qwen3的新一代思考模式开源模型，相较上一版本（通义千问3-235B-A22B-Thinking-2507指令遵循能力有提升、模型总结回复更加精简。","isNew":false},{"name":"Qwen3-Next-80B-A3B-Instruct","cat":"text","in":0.1545,"out":1.236,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"基于Qwen3的新一代非思考模式开源模型，相较上一版本（通义千问3-235B-A22B-Instruct-2507）中文文本理解能力更佳、逻辑推理能力有增强、文本生成类任务表现更好。","isNew":false},{"name":"Qwen3-235B-A22B-Thinking-2507","cat":"text","in":0.2369,"out":2.369,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-235B-A22B）逻辑能力、通用能力、知识增强及创作能力均有大幅提升，适用于高难度强推理场景。","isNew":false},{"name":"Qwen3-235B-A22B-Instruct-2507","cat":"text","in":0.2369,"out":0.9476,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"基于Qwen3的非思考模式开源模型，相较上一版本（通义千问3-235B-A22B）主观创作能力与模型安全性均有小幅度提升。","isNew":false},{"name":"Qwen3-30B-A3B-Thinking-2507","cat":"text","in":0.206,"out":2.472,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-30B-A3B）复杂推理类任务性能优秀，包括逻辑推理、数学、科学、代码类等具有一定难度的任务场景，指令遵循、文本理解、多语言翻译等能力显著提高。","isNew":false},{"name":"Qwen3-30B-A3B-Instruct-2507","cat":"text","in":0.206,"out":0.824,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理","desc":"基于Qwen3的非思考模式开源模型，相较上一版本（通义千问3-30B-A3B）中英文和多语言整体通用能力有大幅提升。主观开放类任务专项优化，显著更加符合用户偏好，能够提供更有帮助性的回复。","isNew":false},{"name":"Qwen3-235B-A22B","cat":"text","in":0.721,"out":2.884,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"实现思考模式和非思考模式的有效融合，可在对话中切换模式。推理能力显著超过QwQ、通用能力显著超过Qwen2.5-72B-Instruct，达到同规模业界SOTA水平。","isNew":false},{"name":"Qwen3-32B","cat":"text","in":0.1648,"out":0.6592,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"实现思考模式和非思考模式的有效融合，可在对话中切换模式。推理能力显著超过QwQ、通用能力显著超过Qwen2.5-32B-Instruct，达到同规模业界SOTA水平。","isNew":false},{"name":"Qwen3-30B-A3B","cat":"text","in":0.206,"out":2.472,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"实现思考模式和非思考模式的有效融合，可在对话中切换模式。推理能力以更小参数规模比肩QwQ-32B、通用能力显著超过Qwen2.5-14B，达到同规模业界SOTA水平。","isNew":false},{"name":"Qwen3-8B","cat":"text","in":0.1854,"out":2.163,"unit":"USD/M","ctx":"128K","mods":"输入:文本 输出:文本","tags":"文本生成任务推理深度思考","desc":"实现思考模式和非思考模式的有效融合，可在对话中切换模式。推理能力达到同规模业界SOTA水平、通用能力显著超过Qwen2.5-7B。","isNew":false},{"name":"Qwen3-VL-235B-A22B-Thinking","cat":"text","in":0.412,"out":4.12,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解深度思考","desc":"Qwen3系列视觉理解模型，多模态思考能力显著增强，模型在STEM与数学推理方面进行了重点优化；视觉感知与识别能力全面提升、OCR能力迎来重大升级。","isNew":false},{"name":"Qwen3-VL-235B-A22B-Instruct","cat":"text","in":0.412,"out":1.648,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解","desc":"Qwen3系列视觉理解模型，在视觉coding、空间感知等方向全面升级；视觉感知与识别能力大幅提升，支持超长视频理解，OCR能力迎来重大升级。","isNew":false},{"name":"Qwen3-VL-30B-A3B-Thinking","cat":"text","in":0.206,"out":2.472,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解深度思考","desc":"Qwen3-VL系列第二大MoE模型的Thinking版本，响应速度快，具备更强多模态理解与推理、视觉智能体、长视频长文档等超长上下文支持能力；全面升级图像/视频理解、空间感知与万物识别能力，胜任复杂现实任务。","isNew":false},{"name":"Qwen3-VL-30B-A3B-Instruct","cat":"text","in":0.206,"out":0.824,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解","desc":"Qwen3-VL系列第二大MoE模型的Instruct版本，响应速度快，支持长视频长文档等超长上下文；全面升级图像/视频理解、空间感知与万物识别能力；具备视觉2D/3D定位能力，胜任复杂现实任务。","isNew":false},{"name":"Qwen3-VL-8B-Instruct","cat":"text","in":0.1854,"out":0.721,"unit":"USD/M","ctx":"128K","mods":"输入:文本 图像 视频 输出:文本","tags":"视觉理解","desc":"Qwen3-VL系列8B Dense模型的Instruct版本，占用显存更低，全面升级图像/视频理解、长视频长文档等超长上下文支持、空间感知与万物识别能力，胜任复杂现实任务。","isNew":false},{"name":"Qwen3-Coder-480B-A35B-Instruct","cat":"text","in":1.545,"out":7.725,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手","desc":"基于Qwen3的代码生成模型，具有强大的Coding Agent能力，代码能力达到开源模型 SOTA。","isNew":false},{"name":"Qwen3-Coder-30B-A3B-Instruct","cat":"text","in":0.4635,"out":2.3175,"unit":"USD/M","ctx":"256K","mods":"输入:文本 输出:文本","tags":"文本生成代码助手","desc":"基于Qwen3的代码生成模型，继承Qwen3-Coder-480B-A35B-Instruct的coding agent能力，代码能力达到同尺寸规模模型SOTA。","isNew":false},{"name":"Gemini 3 Flash Preview","cat":"text","in":0.45,"out":2.7,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 音频 图像 视频 输出:文本","tags":"文本生成","desc":"Gemini 3 Flash Preview 是谷歌功能最强大的智能体和编码模型。它具备100万个词元的上下文窗口，并拥有最佳的多模态理解能力。","isNew":true},{"name":"Gemini 3.1 Pro Preview","cat":"text","in":1.8,"out":10.8,"unit":"USD/M","ctx":"1000K","mods":"输入:文本 图像 视频 音频 输出:文本","tags":"文本生成任务推理深度思考视觉理解多模态代码助手","desc":"Gemini 3.1 Pro专为应对最具挑战性的智能体问题而设计，具备强大的编码能力、顶尖的推理能力以及复杂的多模态理解能力。与Gemini 2.5 Pro相比，它在遵循复杂指令方面的能力提升显著，并以更高的输出效率实现了成果的优化提升。","isNew":false},{"name":"Gemini 2.5 Flash-Lite","cat":"text","in":0.09,"out":0.36,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 音频 图像 视频 输出:文本","tags":"文本生成","desc":"Gemini 2.5 系列模型是具备思维能力的推理型模型，能够在回应前进行内部推理思考，从而提高回答的准确性。Gemini 2.5 Flash-Lite 适用于对延迟敏感的应用场景。","isNew":false},{"name":"Gemini 2.5 Pro","cat":"text","in":1.125,"out":9,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 音频 图像 视频 输出:文本","tags":"文本生成","desc":"Gemini 2.5 Pro 提供了最强的模型质量，尤其在代码和世界知识方面表现突出。它具备100万个词元的上下文窗口。","isNew":false},{"name":"Gemini 2.5 Flash","cat":"text","in":0.27,"out":2.25,"unit":"USD/M","ctx":"1024K","mods":"输入:文本 音频 图像 视频 输出:文本","tags":"文本生成","desc":"Gemini 2.5 系列模型是推理型模型，能够在回应前进行内部思考推理，从而提升整体表现并提高准确性。Gemini 2.5 Flash 在推理能力与响应速度之间实现了最佳平衡。","isNew":false},{"name":"GPT-image-2","cat":"image","in":4.4,"out":26.4,"unit":"USD/M","ctx":null,"mods":"","tags":"图像生成图像处理 输入: 文本 图像 , 输出: 图像","desc":"GPT-image-2 是 OpenAI 最新的尖端图像生成模型。核心升级优势包括：综合性能更强、出图画质更高、编辑操控性更完善，以及人脸特征保真能力优化。该模型具备超高输入图文还原度，支持在保留画面其余元素不变的前提下，单独增删图像某一局部内容。同时在画面比例、输出分辨率、图像编辑能力三大维度均完成全面升级。","isNew":false}],

  pricing: {
  "vendors": [
    "官方原厂",
    "CMI AI Hub",
    "移动云 MoMA",
    "硅基流动",
    "DMXAPI",
    "OpenRouter",
    "Novita AI",
    "Together AI",
    "天翼云星辰MaaS",
    "阿里云百炼",
    "火山引擎方舟",
    "百度千帆",
    "腾讯云",
    "DeepSeek",
    "智谱",
    "Kimi",
    "MiniMax"
  ],
  "rows": [
    {
      "model": "DeepSeek-V4-Pro",
      "ctx": "1024K",
      "note": "文本生成任务推理代码助手深度思考",
      "cells": {
        "官方原厂": "¥3 / ¥6(缓存0.025)",
        "CMI AI Hub": "$1.5312 / $3.0624 · $1.5312 / $3.0624 · $1.5312 / $3.0624",
        "移动云 MoMA": null,
        "硅基流动": "¥12 / ¥24(缓存0.1)",
        "DMXAPI": "¥2.55 / ¥5.1(缓存0.025)",
        "OpenRouter": "$0.435 / $0.87(缓存0.003625)",
        "Novita AI": "$1.6 / $3.2(缓存0.135)",
        "Together AI": "$1.74 / $3.48(缓存0.2)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "DeepSeek-V4-Flash",
      "ctx": "1024K",
      "note": "文本生成任务推理代码助手",
      "cells": {
        "官方原厂": "¥1 / ¥2(缓存0.02)",
        "CMI AI Hub": "$0.1672 / $0.4488 · $0.1672 / $0.4488",
        "移动云 MoMA": "¥1 / ¥2",
        "硅基流动": "¥1 / ¥2(缓存0.02)",
        "DMXAPI": "¥0.79 / ¥1.58(缓存0.02)",
        "OpenRouter": "$0.09 / $0.18(缓存0.018)",
        "Novita AI": "$0.14 / $0.28(缓存0.028)",
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "DeepSeek-V3.2",
      "ctx": "256K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$0.28 / $0.42(缓存0.028)",
        "CMI AI Hub": "$0.5104 / $1.4784",
        "移动云 MoMA": null,
        "硅基流动": "¥4 / ¥6(缓存0.4)",
        "DMXAPI": "¥1.58 / ¥2.37",
        "OpenRouter": "$0.2072 / $0.3108",
        "Novita AI": "$0.269 / $0.4(缓存0.1345)",
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "DeepSeek-R1",
      "ctx": "320K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$0.7 / $2.5",
        "CMI AI Hub": "$1.188 / $4.752 · $1.188 / $4.752",
        "移动云 MoMA": "¥4 / ¥16",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.7 / $2.5",
        "Novita AI": "$0.7 / $2.5(缓存0.35)",
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "DeepSeek-V3",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "$0.2 / $0.8",
        "CMI AI Hub": null,
        "移动云 MoMA": "¥2 / ¥8",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GLM-5.2",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "$1.4 / $4.4(缓存0.26)",
        "CMI AI Hub": null,
        "移动云 MoMA": "¥8 / ¥28(缓存2)",
        "硅基流动": "¥8 / ¥28(缓存2)",
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": "$1.4 / $4.4(缓存0.26)",
        "Together AI": "$1.4 / $4.4(缓存0.26)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GLM-5.1",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "$1.4 / $4.4(缓存0.26)",
        "CMI AI Hub": null,
        "移动云 MoMA": "¥6 / ¥24(缓存1.3)",
        "硅基流动": "¥6 / ¥24(缓存1.3)",
        "DMXAPI": null,
        "OpenRouter": "$0.952 / $2.992(缓存0.26)",
        "Novita AI": "$1.38 / $4.4(缓存0.26)",
        "Together AI": "$1.4 / $4.4(缓存0.26)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Kimi-K2.6",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "¥6.5 / ¥27(缓存1.1)",
        "CMI AI Hub": null,
        "移动云 MoMA": "¥6.5 / ¥27(缓存1.1)",
        "硅基流动": "¥6.5 / ¥27(缓存1.1)",
        "DMXAPI": null,
        "OpenRouter": "$0.6 / $3.41(缓存0.2)",
        "Novita AI": "$0.8 / $3.4(缓存0.16)",
        "Together AI": "$1.2 / $4.5(缓存0.2)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Kimi-K3",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "¥20 / ¥100(缓存2)",
        "CMI AI Hub": null,
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": "$3 / $15(缓存0.3)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.7-Max",
      "ctx": "991K",
      "note": "文本生成代码助手深度思考",
      "cells": {
        "官方原厂": "¥12 / ¥36",
        "CMI AI Hub": "$2.575 / $7.725",
        "移动云 MoMA": "¥12 / ¥36(缓存2.4)",
        "硅基流动": null,
        "DMXAPI": "¥9 / ¥35",
        "OpenRouter": "$1.475 / $4.425(缓存0.295)",
        "Novita AI": "$1.25 / $3.75(缓存0.25)",
        "Together AI": "$1.25 / $3.75(缓存0.13)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.7-Plus",
      "ctx": "1000K",
      "note": "文本生成深度思考视觉理解多模态代码助手",
      "cells": {
        "官方原厂": "¥2 / ¥8",
        "CMI AI Hub": "$0.412 / $1.648",
        "移动云 MoMA": "¥2 / ¥8(缓存0.4)",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.32 / $1.28(缓存0.064)",
        "Novita AI": null,
        "Together AI": "$0.32 / $1.28",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.5-Plus",
      "ctx": "1000K",
      "note": "文本生成深度思考视觉理解",
      "cells": {
        "官方原厂": "¥0.8 / ¥4.8",
        "CMI AI Hub": "$0.412 / $2.472",
        "移动云 MoMA": "¥0.8 / ¥4.8(缓存0.08)",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.5-397B-A17B",
      "ctx": "256K",
      "note": "文本生成深度思考视觉理解",
      "cells": {
        "官方原厂": "¥1.2 / ¥7.2",
        "CMI AI Hub": "$0.618 / $3.708",
        "移动云 MoMA": null,
        "硅基流动": "¥1.2 / ¥7.2",
        "DMXAPI": null,
        "OpenRouter": "$0.385 / $2.45(缓存0.111)",
        "Novita AI": "$0.6 / $3.6",
        "Together AI": "$0.6 / $3.6(缓存0.35)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.5-35B-A3B",
      "ctx": "256K",
      "note": "深度思考视觉理解文本生成",
      "cells": {
        "官方原厂": "¥0.4 / ¥3.2",
        "CMI AI Hub": "$0.2575 / $2.06",
        "移动云 MoMA": "¥0.4 / ¥3.2",
        "硅基流动": "¥0.4 / ¥3.2",
        "DMXAPI": null,
        "OpenRouter": "$0.14 / $1(缓存0.05)",
        "Novita AI": "$0.25 / $2",
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.5-27B",
      "ctx": "256K",
      "note": "深度思考视觉理解文本生成",
      "cells": {
        "官方原厂": "¥0.6 / ¥4.8",
        "CMI AI Hub": "$0.309 / $2.472",
        "移动云 MoMA": "¥0.6 / ¥4.8",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3.5-122B-A10B",
      "ctx": "256K",
      "note": "深度思考视觉理解文本生成",
      "cells": {
        "官方原厂": "¥0.8 / ¥6.4",
        "CMI AI Hub": "$0.412 / $3.296",
        "移动云 MoMA": null,
        "硅基流动": "¥0.8 / ¥6.4",
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3-Max",
      "ctx": "256K",
      "note": "文本生成任务推理",
      "cells": {
        "官方原厂": "¥2.5 / ¥10",
        "CMI AI Hub": "$1.236 / $6.18",
        "移动云 MoMA": "¥2.5 / ¥10(缓存0.5)",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.78 / $3.9",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen-Max",
      "ctx": "32K",
      "note": "文本生成任务推理",
      "cells": {
        "官方原厂": "$1.648 / $6.592",
        "CMI AI Hub": "$1.648 / $6.592",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "MiniMax-M3",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "¥3.15 / ¥12.6(缓存0.63)",
        "CMI AI Hub": null,
        "移动云 MoMA": "¥2.1 / ¥8.4(缓存0.42)",
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.24 / $0.96(缓存0.12)",
        "Novita AI": null,
        "Together AI": "$0.3 / $1.2(缓存0.06)",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "MiniMax-M2.5",
      "ctx": "128K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "¥2.1 / ¥8.4(缓存0.21)",
        "CMI AI Hub": "$0.2418 / $0.9672 · $0.2418 / $0.9672",
        "移动云 MoMA": "¥2.1 / ¥8.4",
        "硅基流动": "¥2.1 / ¥8.4(缓存0.21)",
        "DMXAPI": null,
        "OpenRouter": "$0.15 / $0.9(缓存0.05)",
        "Novita AI": "$0.3 / $1.2(缓存0.03)",
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Claude Opus 4.8",
      "ctx": "1000K",
      "note": "文本生成任务推理代码助手深度思考多模态视觉理解",
      "cells": {
        "官方原厂": "$5.25 / $26.25",
        "CMI AI Hub": "$5.25 / $26.25",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$5 / $25(缓存0.5)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Claude Opus 4.7",
      "ctx": "1000K",
      "note": "文本生成任务推理代码助手深度思考多模态视觉理解",
      "cells": {
        "官方原厂": "$5.25 / $26.25",
        "CMI AI Hub": "$5.25 / $26.25",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$5 / $25(缓存0.5)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Claude Sonnet 4.6",
      "ctx": "200K",
      "note": "文本生成任务推理代码助手深度思考多模态",
      "cells": {
        "官方原厂": "$2.91 / $14.55",
        "CMI AI Hub": "$2.91 / $14.55",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$3 / $15(缓存0.3)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.6 (Terra/Sol/Luna)",
      "ctx": "1024K",
      "note": "文本生成视觉理解任务推理代码助手",
      "cells": {
        "官方原厂": "Terra $2.2/$13.2 · Sol $4.4/$26.4 · Luna $0.88/$5.28",
        "CMI AI Hub": "$2.2 / $13.2 · $4.4 / $26.4 · $0.88 / $5.28",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$1.25 / $7.5(缓存0.25)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.5",
      "ctx": "922K",
      "note": "文本生成任务推理深度思考视觉理解多模态代码助手",
      "cells": {
        "官方原厂": "$4.4 / $26.4",
        "CMI AI Hub": "$4.4 / $26.4",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$5 / $30(缓存0.5)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.4",
      "ctx": "1050K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$2.2 / $13.2",
        "CMI AI Hub": "$2.2 / $13.2",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.4-Pro",
      "ctx": "1050K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$26.4 / $158.4",
        "CMI AI Hub": "$26.4 / $158.4",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.3-Codex",
      "ctx": "400K",
      "note": "文本生成任务推理深度思考代码助手",
      "cells": {
        "官方原厂": "$1.54 / $12.32",
        "CMI AI Hub": "$1.54 / $12.32",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.2",
      "ctx": "400K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$1.54 / $12.32",
        "CMI AI Hub": "$1.54 / $12.32",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5.1",
      "ctx": "400K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$1.1 / $8.8",
        "CMI AI Hub": "$1.1 / $8.8",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-5",
      "ctx": "400K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$1.1 / $8.8",
        "CMI AI Hub": "$1.1 / $8.8",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-4.1",
      "ctx": "1047K",
      "note": "文本生成任务推理",
      "cells": {
        "官方原厂": "$1.76 / $7.04",
        "CMI AI Hub": "$1.76 / $7.04",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "GPT-OSS-120b",
      "ctx": "128K",
      "note": "文本生成任务推理深度思考",
      "cells": {
        "官方原厂": "$0.095 / $0.475",
        "CMI AI Hub": "$0.095 / $0.475 · $0.095 / $0.475",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.03 / $0.17(缓存0.03)",
        "Novita AI": "$0.05 / $0.25",
        "Together AI": "$0.15 / $0.6",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Llama-4-Maverick",
      "ctx": "1000K",
      "note": "文本生成任务推理",
      "cells": {
        "官方原厂": "$0.22 / $0.88",
        "CMI AI Hub": "$0.22 / $0.88",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$0.2 / $0.8",
        "Novita AI": "$0.27 / $0.85",
        "Together AI": "$1.04 / $1.04",
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Gemini 2.5 Pro",
      "ctx": "1024K",
      "note": "文本生成",
      "cells": {
        "官方原厂": "$1.25 / $10",
        "CMI AI Hub": "$1.125 / $9",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": "$1.25 / $10(缓存0.125)",
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Gemini 3.1 Pro",
      "ctx": "1000K",
      "note": "文本生成任务推理深度思考视觉理解多模态代码助手",
      "cells": {
        "官方原厂": "$1.8 / $10.8",
        "CMI AI Hub": "$1.8 / $10.8",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3-Coder-Plus",
      "ctx": "1000K",
      "note": "文本生成代码助手",
      "cells": {
        "官方原厂": "$1.03 / $5.15",
        "CMI AI Hub": "$1.03 / $5.15",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Qwen3-VL-235B-A22B",
      "ctx": "",
      "note": "",
      "cells": {
        "官方原厂": "$0.412 / $4.12",
        "CMI AI Hub": null,
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    },
    {
      "model": "Mistral-Large-3",
      "ctx": "256K",
      "note": "文本生成任务推理",
      "cells": {
        "官方原厂": "$0.44 / $1.32",
        "CMI AI Hub": "$0.44 / $1.32",
        "移动云 MoMA": null,
        "硅基流动": null,
        "DMXAPI": null,
        "OpenRouter": null,
        "Novita AI": null,
        "Together AI": null,
        "天翼云星辰MaaS": null,
        "阿里云百炼": null,
        "火山引擎方舟": null,
        "百度千帆": null,
        "腾讯云": null,
        "DeepSeek": null,
        "智谱": null,
        "Kimi": null,
        "MiniMax": null
      }
    }
  ],
  "mmRows": [
    {
      "model": "Gemini 3.1 Flash Image (Nano Banana 2)",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$2.79 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Gemini 3 Pro Image (Nano Banana Pro)",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$11.16 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Dreamina-Seedance-2.0-fast",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$3.465 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Dreamina-Seedance-2.0",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$4.935 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-Videoedit",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-T2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-R2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-I2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-R2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-R2v-Flash",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.07725 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.5-I2v-Preview",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-I2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-I2v-Flash",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.07725 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.2-T2v-Plus",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.103 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.5-T2v-Preview",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-T2v",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.1-Vace-Plus",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.103 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.2-T2i-Plus",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0515 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.2-T2i-Flash",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.02575 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.5-T2i-Preview",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.5-I2i-Preview",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-Image-Pro",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.07725 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.7-Image",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Wan2.6-T2i",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-Edit-Max",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.07725 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-Edit",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.04635 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-Edit-Plus",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-2.0",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.03605 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-2.0-Pro",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.07725 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-Max",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.07725 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.03605 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Qwen-Image-Plus",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0309 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedance-1.0-Pro-Fast",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$0.095 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedance-1.5-Pro",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$1.14 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedance-1.0-Pro",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$2.375 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo 3.1Fast",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.135 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo 3.1 Lite",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.045 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Gemini 3.1 Flash Image Preview",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$2.7 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedream-5.0-lite",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.03325 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo 3.1",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.36 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo3 Fast",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.135 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo 3",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.36 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "GPT-Image-1",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$35.2 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "GPT-Image-1-Mini",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$7.04 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedream-4.5",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.038 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Seedream-4.0",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.0285 / 张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo2",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.45 / 秒",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Gemini 2.5 Flash Image(NanoBanana)",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$0.0351 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "GPT-image-2",
      "unit": "美元/M",
      "cells": {
        "CMI AI Hub": "$26.4 / M",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见原厂官网"
      }
    },
    {
      "model": "Veo 3.1(视频)",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.18(视频)/$0.36(含音频)",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见 Google 官网"
      }
    },
    {
      "model": "Wan2.7-T2v(文生视频)",
      "unit": "美元/秒",
      "cells": {
        "CMI AI Hub": "$0.1545/秒",
        "硅基流动": "—",
        "DMXAPI": "¥0.6/秒(720P);¥1/秒(1080P)",
        "Novita AI": "—",
        "官方原厂": "见阿里云百炼"
      }
    },
    {
      "model": "Seedance-1.5-Pro(视频)",
      "unit": "美元/百万tokens",
      "cells": {
        "CMI AI Hub": "$1.14(视频)/$2.28(含音频)",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见火山引擎"
      }
    },
    {
      "model": "Kling v1.6 i2v(视频)",
      "unit": "美元/个",
      "cells": {
        "CMI AI Hub": "—",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "$0.27(5s720P)/$0.54(10s)",
        "官方原厂": "见快影"
      }
    },
    {
      "model": "Wan2.2-I2V/T2V-A14B(视频)",
      "unit": "元/个",
      "cells": {
        "CMI AI Hub": "—",
        "硅基流动": "¥2/个",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "开源免费(自托管)"
      }
    },
    {
      "model": "Qwen-Image(文生图)",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.036/张",
        "硅基流动": "¥0.30/张",
        "DMXAPI": "¥0.25/张",
        "Novita AI": "$0.02/张",
        "官方原厂": "见阿里云百炼"
      }
    },
    {
      "model": "Seedream-4.5(图像)",
      "unit": "美元/张",
      "cells": {
        "CMI AI Hub": "$0.038/张",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见火山引擎"
      }
    },
    {
      "model": "Z-Image-Turbo(图像)",
      "unit": "元/张",
      "cells": {
        "CMI AI Hub": "—",
        "硅基流动": "¥0.10/张",
        "DMXAPI": "¥0.10-0.20/张",
        "Novita AI": "—",
        "官方原厂": "见通义"
      }
    },
    {
      "model": "GPT-Image-1(图像)",
      "unit": "美元/百万tokens",
      "cells": {
        "CMI AI Hub": "输入$4.4(文本)/$8.8(图片),输出$35.2",
        "硅基流动": "—",
        "DMXAPI": "—",
        "Novita AI": "—",
        "官方原厂": "见 OpenAI 官网"
      }
    }
  ],
  "findings": [
    {
      "title": "国产旗舰:官方/原厂直调或折扣聚合最低",
      "desc": "DeepSeek-V4-Pro 官方 ¥3/6(缓存¥0.025)为全渠道最低;经 DMXAPI 8.5 折后(¥2.55/5.1)低于硅基流动(¥12/24);Qwen3.5-Plus 经 DMXAPI 5 折(¥0.4/2.4)为国产最低档——折扣聚合平台正改写价格锚点(数据:硅基流动/DMXAPI/百炼/DeepSeek 官网定价页)。"
    },
    {
      "title": "Kimi-K2.6、GPT-OSS-120b:Novita 全渠道最低",
      "desc": "Kimi-K2.6 在 Novita($0.80/$3.40)低于官方(¥6.5/27)与硅基(¥6.5/27);GPT-OSS-120b 在 Novita($0.05/$0.25)同样最低——开源/海外托管模型的价格洼地在美国二线推理云(数据:Novita 官网定价页)。"
    },
    {
      "title": "MoMA/天翼云:运营商走'同价+服务'路线",
      "desc": "GLM-5.1 在 MoMA(¥6/24)与硅基一致;MiniMax-M2.5 在 MoMA/硅基/CMI 三家同价(¥2.1/8.4)——头部模型在各渠道价格趋同,竞争转向服务与治理(数据:移动云 MoMA 帮助中心 outline/98799、天翼云星辰 MaaS 计费文档)。"
    },
    {
      "title": "海外旗舰:CMI AI Hub 与官方美元同价",
      "desc": "Claude Opus 4.8($5.25/$26.25)、GPT-5.6 等在 CMI 与官方价一致,省去境外支付/合规/网络成本;OpenRouter 为透传价+5.5% 充值手续费(GPT-OSS-120b 显示 $0.03/$0.17)(数据:OpenRouter models 页、CMI AI Hub 控制台)。"
    },
    {
      "title": "成本优化组合拳已成行业标配",
      "desc": "缓存命中价(硅基 V4-Flash ¥0.02/百万、DeepSeek 官方 ¥0.025)、批量 5 折(Novita Batch)、预留吞吐(Together PTU、天翼 TPM 包)、分段计价(长上下文加价)——平台需同时具备四类机制才有成本竞争力(数据:各厂商定价/帮助页)。"
    },
    {
      "title": "CMI AI Hub 模型最全(148 款,美元计价)",
      "desc": "CMI AI Hub 控制台已上架 148 款模型(99 文本/25 图像/24 视频),覆盖 GPT-5.6 全系、Claude 4.8/4.7、Gemini 3、Qwen3.7、DeepSeek-V4、MiniMax、字节 Seed 等,国际旗舰美元同价、国内直连接入(数据:CMI AI Hub 控制台模型目录,见 3.5 完整目录)。"
    }
  ]
},

  /* ================= 模块四:差异化定位 ================= */
  differentiation: [
    { title: "网络层差异化", icon: "🌐", desc: "依托中信国际电讯全球骨干网,跨境低时延直连国际旗舰模型,解决出海企业网络与境外支付/合规痛点。", bench: "对标 15 家,仅运营商云与 CMI 具运营商级骨干网" },
    { title: "安全合规差异化", icon: "🛡️", desc: "融合中港两地合规资质,提供数据跨境合规方案、全链路加密与审计;'网络+合规'一体化。", bench: "治理深度可比 Portkey/LiteLLM,CMI 胜在一体化" },
    { title: "行业场景差异化", icon: "🏭", desc: "聚焦金融、跨境电商、制造业等优势行业,预装行业模型与知识库模板。", bench: "对标厂商以通用能力为主,行业化是 CMI 补齐方向" },
    { title: "服务模式差异化", icon: "🤝", desc: "提供'网络+算力+模型+运维'一站式打包,客户经理贴身支持与企业级 SLA。", bench: "仅移动云/天翼等运营商云具同等贴身服务" }
  ],
  priorities: [
    { level: "P0", name: "共性必做功能(聚合平台基线)", color: "#2b5cff", items: [
      { t: "统一 API 接入/网关", heat: ["agg_unified"] },
      { t: "多模型聚合 / 模型目录", heat: ["agg_models", "agg_catalog"] },
      { t: "按 token 计量计费", heat: ["per_token"] },
      { t: "密钥与权限管理", heat: ["key_pool", "rbac"] },
      { t: "调用监控与可观测", heat: ["observ"] }
    ]},
    { level: "P1", name: "竞争必备功能(行业门槛)", color: "#00b3a4", items: [
      { t: "智能路由与故障切换", heat: ["route", "failover", "smart"] },
      { t: "缓存命中计费", heat: ["cache_bill"] },
      { t: "用量对账与成本分析", heat: ["recon", "budget", "analysis"] },
      { t: "上下文安全存储", heat: ["ctx_store"] },
      { t: "全链路审计", heat: ["audit"] }
    ]},
    { level: "P2", name: "差异化亮点(CMI 优势区)", color: "#f2994a", items: [
      { t: "跨境低时延网络加速", tag: "CMI" },
      { t: "中港合规一站式方案", tag: "CMI" },
      { t: "国际旗舰模型美元同价", tag: "CMI" },
      { t: "多区域容灾 / 安全沙箱", heat: ["sandbox", "failover"] },
      { t: "行业解决方案包", tag: "CMI" }
    ]}
  ],
  architecture: [
    { layer: "应用层", en: "Application", items: ["模型广场", "开发工具", "Agent 框架", "行业模板"], color: "#7c3aed" },
    { layer: "管控层", en: "Management", items: ["计量计费", "监控告警", "运营分析", "安全审计"], color: "#f2994a" },
    { layer: "模型层", en: "Model", items: ["多模型适配", "推理引擎", "缓存加速"], color: "#00b3a4" },
    { layer: "调度层", en: "Scheduling", items: ["智能路由", "负载均衡", "故障容灾"], color: "#2b5cff" },
    { layer: "接入层", en: "Access", items: ["统一 API 网关", "鉴权", "限流"], color: "#0e9de0" }
  ]
};
