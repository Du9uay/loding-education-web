import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Network, 
  BookOpen,
  Users,
  Monitor,
  Settings,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap
} from '../../components/Icons';

const WarehouseTypesPage: React.FC = () => {
  // 按空间布局维度分类
  const spatialTypes = [
    {
      title: "中心仓",
      description: "承担大批量存储任务、进行区域范围分拨以及干线转运工作",
      coreGoal: "大批量存储、区域分拨、干线转运",
      technologies: [
        "自动化立体库（AS/RS）",
        "高速堆垛机",
        "多层穿梭车",
        "越库分拣线"
      ],
      scenarios: [
        "电商大促备货中心",
        "品牌总仓分拨中心",
        "区域RDC配送中心"
      ],
      features: [
        "强大的存储容量",
        "高效的区域分拨能力",
        "干线运输线路对接",
        "大批量货物处理"
      ],
      icon: Monitor
    },
    {
      title: "前置仓",
      description: "尽可能贴近消费者，从而实现分钟级的履约服务",
      coreGoal: "贴近消费者、分钟级履约",
      technologies: [
        "微型立体库",
        "密集货柜",
        "货到人拣选站",
        "即时调度AGV/AMR"
      ],
      scenarios: [
        "社区生鲜配送",
        "药品急送服务",
        "同城即时零售"
      ],
      features: [
        "靠近消费者位置",
        "快速响应订单",
        "小批量高频配送",
        "即时履约服务"
      ],
      icon: Target
    }
  ];

  // 按功能优先级维度分类
  const functionalTypes = [
    {
      title: "存储型仓库",
      description: "最大化单位面积或单位体积的存储量",
      coreGoal: "最大化存储密度",
      technologies: [
        "窄巷道高位货架",
        "双深/三深堆垛机",
        "穿梭车密集存储系统"
      ],
      scenarios: [
        "备件库存储",
        "季节性商品存储",
        "冷链原料库"
      ],
      characteristics: [
        "高空间利用率",
        "大容量存储",
        "长期存储优化",
        "成本效益优先"
      ],
      icon: Settings
    },
    {
      title: "流通型仓库",
      description: "最大化订单处理的速度与准确率",
      coreGoal: "最大化订单处理效率",
      technologies: [
        "交叉带分拣机",
        "机器人拆零拣选",
        "AGV集群动态调度",
        "自动包装线"
      ],
      scenarios: [
        "电商爆品中心",
        "快递转运中心",
        "多波次拆零拣选"
      ],
      characteristics: [
        "高速订单处理",
        "精准分拣配送",
        "快速周转率",
        "效率优先设计"
      ],
      icon: Zap
    }
  ];

  // 按设备类型维度分类
  const equipmentTypes = [
    {
      title: "流水线式智能仓储结构",
      description: "利用流水线技术实现自动化运输和分拣仓库货物",
      principle: "通过流水线将货物的运输、分拣、装载、卸货等环节串联起来，形成一个自动化的流程",
      applications: [
        "电子产品仓库自动分拣",
        "生产线配套仓储",
        "包装流水线仓储"
      ],
      advantages: [
        "流程自动化程度高",
        "减少人工操作错误",
        "提高作业效率",
        "降低劳动强度"
      ],
      icon: Network
    },
    {
      title: "四向移动式智能堆垛仓",
      description: "由智能设备控制的自动堆垛仓储存系统",
      principle: "智能设备能够自主控制堆垛机在四个方向（前后左右）移动，完成自动储存和交付作业",
      applications: [
        "大型食品仓库管理",
        "医药产品存储",
        "化工原料仓储"
      ],
      advantages: [
        "四向移动灵活性强",
        "精准定位存取",
        "自动化程度高",
        "空间利用率高"
      ],
      icon: Settings
    },
    {
      title: "AGV式智能仓储结构",
      description: "采用自动导航小车技术来实现货物管理和运输的智能化仓储结构",
      principle: "AGV小车内置导航系统，能够根据预先设定的地图和导航路线，自主行驶到指定位置进行作业",
      applications: [
        "医药仓库精准运输",
        "汽车零部件配送",
        "电商仓库货物搬运"
      ],
      advantages: [
        "导航精准可靠",
        "避免货物损坏",
        "提高作业安全性",
        "减少人工搬运风险"
      ],
      icon: Users
    },
    {
      title: "机器人式智能仓储结构",
      description: "采用机器人技术进行智能化仓储管理和货物调度",
      principle: "机器人具备自主识别、采集、分拣、打印等技术能力，实现仓库货物的智能化管理和操作",
      applications: [
        "服装仓库智能分拣",
        "图书仓储管理",
        "小件商品处理"
      ],
      advantages: [
        "视觉识别技术先进",
        "分拣精度高",
        "信息采集实时",
        "管理智能化程度高"
      ],
      icon: Target
    },
    {
      title: "自动化立体库",
      description: "采用仓储货架及其运输、提升、移动装置以及控制系统等技术实现物料的自动化立体储存和调度",
      principle: "由叉车、马达、电脑控制系统、仓储货架等部分组成，通过控制系统协调各个部分工作",
      applications: [
        "汽车零部件仓库",
        "钢铁原料存储",
        "化工产品立体存储"
      ],
      advantages: [
        "充分利用垂直空间",
        "精准控制存取",
        "实时监控库存",
        "提高生产效率"
      ],
      icon: Monitor
    }
  ];

  // 类型选择指南
  const selectionGuide = {
    spatialLayout: {
      title: "空间布局选择",
      factors: [
        "服务范围：中心仓服务大区域，前置仓服务小区域",
        "响应时间：中心仓适合计划性配送，前置仓适合即时配送",
        "投资成本：中心仓投资大、效率高，前置仓投资小、覆盖面广",
        "业务特点：B2B业务适合中心仓，B2C业务适合前置仓"
      ]
    },
    functional: {
      title: "功能优先级选择",
      factors: [
        "业务特点：长期存储选择存储型，快速流转选择流通型",
        "商品特性：标准品适合存储型，多品种小批量适合流通型",
        "订单模式：大批量订单适合存储型，多频次小订单适合流通型",
        "成本考虑：存储型注重存储成本，流通型注重处理效率"
      ]
    },
    equipment: {
      title: "设备类型选择",
      factors: [
        "作业复杂度：复杂作业选择机器人式，简单作业选择流水线式",
        "存储密度：高密度存储选择立体库，灵活存储选择AGV式",
        "货物特点：重型货物选择堆垛式，轻型货物选择机器人式",
        "投资预算：预算充足选择机器人式，预算有限选择流水线式"
      ]
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden gpu-accelerated"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--accent-logistics-500)] rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[color:var(--accent-logistics-500)] rounded-2xl flex items-center justify-center mr-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-silver-100)] mb-2">
                智慧仓储主要类型
              </h1>
              <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                了解不同智慧仓储类型的特点与应用场景，掌握选择适配仓储类型的方法
            </p>
          </div>
        </div>
        </motion.div>

        {/* 按空间布局维度分类 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-[color:var(--accent-logistics-500)] mr-3" />
              （一）按空间布局维度分类
            </h2>

            {/* 空间布局分类介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                根据仓储服务的空间范围和定位，智慧仓储可以分为中心仓和前置仓两大类。不同的空间布局适应不同的业务需求和服务模式。
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {spatialTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    {/* 类型标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center">
                        <type.icon className="w-7 h-7 text-[color:var(--accent-logistics-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {type.title}
                        </h3>
                        <p className="text-[color:var(--accent-logistics-500)] text-sm font-semibold">
                          {type.coreGoal}
                        </p>
                      </div>
                    </div>

                    <p className="text-[color:var(--text-silver-100)]/80 mb-6">
                      {type.description}
                    </p>

                    {/* 典型技术配置 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">典型技术配置</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {type.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Settings className="w-4 h-4 text-[color:var(--accent-logistics-500)] flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 应用场景 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">适用场景</h4>
                      <div className="space-y-2">
                        {type.scenarios.map((scenario, scenarioIndex) => (
                          <div key={scenarioIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[color:var(--accent-automation-500)]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-[color:var(--accent-automation-500)] rounded-full" />
                            </div>
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                              {scenario}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 核心特点 */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-automation-500)] uppercase tracking-wider mb-3">
                        核心特点
                      </h4>
                      <div className="space-y-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-[color:var(--accent-automation-500)] mt-0.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/80 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 按功能优先级维度分类 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Target className="w-6 h-6 text-[color:var(--accent-automation-500)] mr-3" />
              （二）按功能优先级维度分类
            </h2>

            {/* 功能优先级分类介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                根据仓储功能的核心目标和优先级，智慧仓储可以分为存储型仓库和流通型仓库。存储型仓库注重空间利用率最大化，流通型仓库注重订单处理效率最大化。
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {functionalTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    {/* 类型标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-automation-500)]/20 to-[color:var(--accent-automation-500)]/10 rounded-2xl flex items-center justify-center">
                        <type.icon className="w-7 h-7 text-[color:var(--accent-automation-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {type.title}
                        </h3>
                        <p className="text-[color:var(--accent-automation-500)] text-sm font-semibold">
                          {type.coreGoal}
                        </p>
                      </div>
                    </div>

                    <p className="text-[color:var(--text-silver-100)]/80 mb-6">
                      {type.description}
                    </p>

                    {/* 典型技术配置 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">典型技术配置</h4>
                      <div className="space-y-2">
                        {type.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <Zap className="w-4 h-4 text-[color:var(--accent-automation-500)] flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 应用场景 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">适用场景</h4>
                      <div className="space-y-2">
                        {type.scenarios.map((scenario, scenarioIndex) => (
                          <div key={scenarioIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-[color:var(--accent-warning-500)]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <div className="w-2 h-2 bg-[color:var(--accent-warning-500)] rounded-full" />
                            </div>
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                              {scenario}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 核心特征 */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-warning-500)] uppercase tracking-wider mb-3">
                        核心特征
                      </h4>
                      <div className="space-y-2">
                        {type.characteristics.map((characteristic, charIndex) => (
                          <div key={charIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-[color:var(--accent-warning-500)] mt-0.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/80 text-sm">
                              {characteristic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 按设备类型维度分类 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Settings className="w-6 h-6 text-[color:var(--accent-warning-500)] mr-3" />
              （三）按设备类型维度分类
            </h2>

            {/* 设备类型分类介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                根据核心设备和技术特点，智慧仓储可以分为流水线式、四向移动式智能堆垛仓、AGV式、机器人式和自动化立体库等多种类型。每种类型都有其独特的技术特点和应用优势。
              </p>
            </div>

            <div className="space-y-8">
              {equipmentTypes.map((type, index) => (
                <motion.div
                  key={index}
                  className="card-base p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* 类型标题 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-warning-500)]/20 to-[color:var(--accent-warning-500)]/10 rounded-2xl flex items-center justify-center">
                      <type.icon className="w-8 h-8 text-[color:var(--accent-warning-500)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[color:var(--text-silver-100)]">
                        {type.title}
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* 工作原理 */}
                    <div>
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">工作原理</h4>
                      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                        <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                          {type.principle}
                        </p>
                      </div>

                      {/* 典型应用 */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">典型应用</h4>
                        <div className="space-y-3">
                          {type.applications.map((application, appIndex) => (
                            <motion.div
                              key={appIndex}
                              className="flex items-start gap-3 p-3 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + appIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Target className="w-4 h-4 text-[color:var(--accent-warning-500)] mt-0.5 flex-shrink-0" />
                              <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                                {application}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 核心优势 */}
                    <div>
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">核心优势</h4>
                      <div className="space-y-4">
                        {type.advantages.map((advantage, advIndex) => (
                          <motion.div
                            key={advIndex}
                            className="relative"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + advIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border-l-4 border-green-500/30">
                              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              </div>
                              <div>
                                <span className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                                  {advantage}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 类型选择指南 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Network className="w-6 h-6 text-[color:var(--accent-logistics-500)] mr-3" />
              智慧仓储类型选择指南
            </h2>

            <div className="space-y-8">
              {Object.entries(selectionGuide).map(([key, guide], index) => (
                <motion.div
                  key={key}
                  className="card-base p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-6">
                    {guide.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {guide.factors.map((factor, factorIndex) => (
                      <motion.div
                        key={factorIndex}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + factorIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 bg-[color:var(--accent-logistics-500)]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[color:var(--accent-logistics-500)] text-xs font-bold">
                            {factorIndex + 1}
                          </span>
                        </div>
                        <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                          {factor}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 总结建议 */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-logistics-500)]/5 backdrop-blur-sm rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">选择建议</h4>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h5 className="text-lg font-bold text-[color:var(--text-silver-100)] mb-2">综合评估</h5>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">考虑业务特点、投资预算、技术水平等多个维度</p>
                </div>
                <div className="text-center">
                  <h5 className="text-lg font-bold text-[color:var(--text-silver-100)] mb-2">分步实施</h5>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">从简单的自动化开始，逐步升级到智能化</p>
                </div>
                <div className="text-center">
                  <h5 className="text-lg font-bold text-[color:var(--text-silver-100)] mb-2">持续优化</h5>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">根据运营数据和市场变化持续调整优化</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/hardware-equipment"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            智慧仓储硬件设备组成
          </Link>
          
          <Link 
            to="/course-summary" 
            className="btn-primary flex items-center group"
          >
            课程总结
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarehouseTypesPage;