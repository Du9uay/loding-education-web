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

const HardwareEquipmentPage: React.FC = () => {
  // 自动化立体仓库(AS/RS)
  const asrsComponents = [
    {
      title: "立体货架",
      description: "采用多层设计，能够极大拓展存储空间",
      features: [
        "多层设计充分利用垂直空间",
        "钢结构稳定性强",
        "标准化货位设计",
        "空间利用率提升3-5倍"
      ],
      applications: [
        "大型医药配送仓库",
        "电商物流中心", 
        "汽车零部件仓库"
      ],
      icon: Monitor
    },
    {
      title: "巷道堆垛机",
      description: "在货架的巷道内穿梭运行，专门负责货物的存取操作",
      features: [
        "运行速度可达200m/min",
        "定位精度达到±3mm",
        "24小时不间断作业",
        "精准存取货物"
      ],
      applications: [
        "自动化立体仓库",
        "冷链仓储系统",
        "危险品仓库"
      ],
      icon: Settings
    },
    {
      title: "输送系统",
      description: "承担着在仓库不同区域间传输货物的任务",
      features: [
        "皮带输送机适应不同货物",
        "滚筒输送机结构简单",
        "连续自动化输送",
        "与其他设备无缝衔接"
      ],
      applications: [
        "分拣中心",
        "生产线配送",
        "包装流水线"
      ],
      icon: Network
    },
    {
      title: "控制系统",
      description: "如同仓库的'大脑'，对各部分的运作进行精准协调",
      features: [
        "实时监控系统状态",
        "精准协调各部件运作",
        "故障自动报警",
        "数据实时反馈"
      ],
      applications: [
        "智能仓储系统",
        "无人仓库",
        "自动化物流中心"
      ],
      icon: Target
    }
  ];

  // AGV自动导引车
  const agvFeatures = [
    {
      title: "导航方式",
      description: "多种导航技术确保精准定位和路径规划",
      technologies: [
        {
          name: "激光SLAM导航",
          features: ["不需要预先铺设轨道", "具有很强的灵活性", "适应布局变化", "构建实时地图"],
          precision: "高精度定位"
        },
        {
          name: "QR码导航",
          features: ["预先铺设QR码标识", "识别QR码确定路线", "室内定位精度±10mm", "成本相对较低"],
          precision: "±10mm"
        },
        {
          name: "混合导航",
          features: ["综合多种导航优势", "激光SLAM+QR码结合", "导航更加精准稳定", "适应复杂环境"],
          precision: "超高精度"
        }
      ],
      icon: Network
    },
    {
      title: "集群调度",
      description: "借助5G-MEC技术实现百台级的协同工作",
      capabilities: [
        "5G-MEC边缘计算技术",
        "百台级AGV协同调度",
        "峰值搬运能力>1000箱/h",
        "快速通信和协同调度"
      ],
      performance: {
        scale: "百台级",
        capacity: ">1000箱/h",
        efficiency: "大幅提升"
      },
      applications: [
        "大型电商物流中心",
        "汽车制造工厂",
        "智能仓储园区"
      ],
      icon: Users
    }
  ];

  // 自动分拣系统
  const sortingSystem = [
    {
      title: "交叉带分拣机",
      description: "通过传送带的运动以及分拣机构的配合，把货物精准地分拣到指定区域",
      features: [
        "高速传送带运输",
        "精准分拣机构配合",
        "支持多种货物规格",
        "连续高效作业"
      ],
      performance: {
        throughput: "15000件/h",
        accuracy: "99.95%",
        errorRate: "0.05%"
      },
      icon: Settings
    },
    {
      title: "3D视觉抓取",
      description: "运用3D视觉技术来识别货物的位置、形状等信息，然后依靠机械臂等装置准确地抓取货物",
      features: [
        "3D视觉识别技术",
        "精准识别货物信息",
        "机械臂精确抓取",
        "适应不规则货物"
      ],
      performance: {
        recognition: "高精度",
        flexibility: "强适应性",
        automation: "全自动化"
      },
      icon: Target
    }
  ];

  // 其他相关硬件设备
  const otherEquipment = [
    {
      title: "自动化输送设备",
      types: [
        {
          name: "皮带输送机",
          description: "通过皮带运转输送货物，能适应不同长度和重量货物的传输",
          features: ["适应性强", "承载能力大", "运行平稳", "维护简单"]
        },
        {
          name: "滚筒输送机",
          description: "利用滚筒转动输送货物，结构简单且维护方便",
          features: ["结构简单", "维护方便", "成本较低", "适合标准货物"]
        }
      ],
      icon: Network
    },
    {
      title: "穿梭车(RGV)",
      description: "在货架轨道上运行，实现货架内部货物的快速搬运与存储",
      features: [
        "在货架轨道上高速运行",
        "实现货架内部快速搬运",
        "与立体仓库协同工作",
        "提升存储效率"
      ],
      applications: [
        "大型电商仓库",
        "智能仓储系统",
        "自动化物流中心"
      ],
      performance: {
        speed: "高速运行",
        precision: "精准定位",
        efficiency: "高效存储"
      },
      icon: Zap
    }
  ];

  // 设备协同案例
  const integrationCase = {
    title: "大型电商仓库设备协同案例",
    description: "穿梭车与自动化立体仓库、AGV等设备协同工作，构成完整智慧仓储系统",
    workflow: [
      "货物入库：AGV将货物运送至立体仓库入口",
      "存储作业：堆垛机将货物精准存放到指定货位",
      "内部搬运：穿梭车在货架内部快速搬运货物",
      "出库分拣：自动分拣系统对出库货物进行分拣",
      "最终配送：AGV将分拣后货物运送至发货区"
    ],
    benefits: [
      "实现货物全流程自动化",
      "大幅提升仓库运作效率",
      "降低人工成本和错误率",
      "提升管理水平和客户满意度"
    ]
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
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-silver-100)] mb-2">
                智慧仓储硬件设备组成
              </h1>
              <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                掌握自动化立体仓库、AGV、分拣系统等核心硬件设备的功能与应用
            </p>
          </div>
        </div>
        </motion.div>

        {/* 自动化立体仓库（AS/RS） */}
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
              自动化立体仓库（AS/RS）
            </h2>

            {/* AS/RS介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                自动化立体仓库是智慧仓储体系中关键的硬件设施，它借助自动化货架系统与堆垛机来达成高效的仓储运作。从结构层面剖析，其由立体货架、巷道堆垛机、输送系统以及控制系统共同构成。
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="text-[color:var(--accent-logistics-500)] font-semibold mb-2">运行速度</h5>
                  <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                    单机堆垛机可达200m/min
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="text-[color:var(--accent-logistics-500)] font-semibold mb-2">定位精度</h5>
                  <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                    能达到±3mm
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <h5 className="text-[color:var(--accent-logistics-500)] font-semibold mb-2">空间利用率</h5>
                  <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                    较传统仓库提升3-5倍
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {asrsComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    {/* 组件标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center">
                        <component.icon className="w-7 h-7 text-[color:var(--accent-logistics-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {component.title}
                        </h3>
                        <p className="text-[color:var(--text-silver-100)]/80 text-sm">
                          {component.description}
                        </p>
                      </div>
                    </div>

                    {/* 功能特性 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">功能特性</h4>
                      <div className="space-y-3">
                        {component.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-5 h-5 text-[color:var(--accent-logistics-500)] mt-0.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 应用场景 */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-automation-500)] uppercase tracking-wider mb-3">
                        典型应用
                      </h4>
                      <div className="space-y-2">
                        {component.applications.map((application, appIndex) => (
                          <div key={appIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-[color:var(--accent-automation-500)] rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/80 text-sm">
                              {application}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 性能指标总结 */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-logistics-500)]/5 backdrop-blur-sm rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">AS/RS系统性能指标</h4>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-logistics-500)] mb-2">200m/min</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">单机堆垛机运行速度</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-logistics-500)] mb-2">±3mm</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">定位精度</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-logistics-500)] mb-2">3-5倍</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">空间利用率提升</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 自动导引车（AGV） */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Users className="w-6 h-6 text-[color:var(--accent-automation-500)] mr-3" />
              自动导引车（AGV）
            </h2>

            {/* AGV介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                自动导引车在智慧仓储里主要用于物料的自动搬运，它能够在仓库内自主导航，无需人工干预，显著提升了货物搬运的效率与准确性。
              </p>
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                例如在一个大型的电商物流中心，上百台AGV在5G-MEC的调度下，有序地将货物从入库区搬运到存储区，或者从存储区搬运到出库区，每小时能够搬运超过1000箱货物，大大提高了物流搬运的效率。
              </p>
            </div>

            {agvFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-base p-8">
                  {/* 功能标题 */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-automation-500)]/20 to-[color:var(--accent-automation-500)]/10 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-[color:var(--accent-automation-500)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[color:var(--text-silver-100)]">
                        {feature.title}
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* 导航技术详解 */}
                  {feature.technologies && (
                    <div className="space-y-6">
                      {feature.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="relative"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="text-lg font-bold text-[color:var(--text-silver-100)]">
                                {tech.name}
                              </h4>
                              <span className="text-sm font-semibold text-[color:var(--accent-automation-500)] bg-[color:var(--accent-automation-500)]/10 px-3 py-1 rounded-full">
                                {tech.precision}
                              </span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                              {tech.features.map((techFeature, techFeatureIndex) => (
                                <div key={techFeatureIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-4 h-4 text-[color:var(--accent-automation-500)] mt-0.5 flex-shrink-0" />
                                  <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                                    {techFeature}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* 集群调度能力 */}
                  {feature.capabilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">核心能力</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          {feature.capabilities.map((capability, capIndex) => (
                            <motion.div
                              key={capIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + capIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Zap className="w-5 h-5 text-[color:var(--accent-automation-500)] mt-0.5 flex-shrink-0" />
                              <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                                {capability}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* 性能表现 */}
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-[color:var(--accent-automation-500)] uppercase tracking-wider">
                            性能表现
                          </h4>
                          {Object.entries(feature.performance).map(([key, value], perfIndex) => (
                            <div key={perfIndex} className="bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-lg p-3">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-[color:var(--text-silver-100)]/70">
                                  {key === 'scale' && '调度规模'}
                                  {key === 'capacity' && '搬运能力'}
                                  {key === 'efficiency' && '效率提升'}
                                </span>
                                <span className="text-[color:var(--accent-automation-500)] font-semibold">
                                  {value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 应用案例 */}
                      {feature.applications && (
                        <div className="mt-6 border-t border-white/10 pt-6">
                          <h4 className="text-sm font-semibold text-[color:var(--accent-warning-500)] uppercase tracking-wider mb-3">
                            典型应用场景
                          </h4>
                          <div className="grid md:grid-cols-3 gap-3">
                            {feature.applications.map((application, appIndex) => (
                              <div key={appIndex} className="bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-lg p-3">
                                <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                                  {application}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 自动分拣系统 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Target className="w-6 h-6 text-[color:var(--accent-warning-500)] mr-3" />
              自动分拣系统
            </h2>

            {/* 自动分拣系统介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                自动分拣系统是提升智慧仓储分拣效率与准确性的重要设备。从技术实现来看，包含交叉带分拣机和3D视觉抓取。这种技术组合能够支持15000件/h的高吞吐，在短时间内就能处理大量的货物分拣任务。
              </p>
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                在应用效果上，错分率低至0.05%，拣选工时降幅60%+。例如在一个服装仓库中，传统的人工分拣可能需要大量工人花费较长时间来分拣不同款式、尺码的服装，而引入自动分拣系统后，分拣时间大幅缩短，工人的工作时间减少了60%以上，同时出错率也大大降低。
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <h4 className="text-lg font-semibold text-[color:var(--accent-warning-500)] mb-2">快递分拣中心案例</h4>
                <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                  在一个大型的快递分拣中心，交叉带分拣机快速运转，3D视觉抓取装置精准识别包裹，将不同目的地的包裹分拣到对应的出口，保障了大量快递能够高效分拣。
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {sortingSystem.map((system, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    {/* 系统标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-warning-500)]/20 to-[color:var(--accent-warning-500)]/10 rounded-2xl flex items-center justify-center">
                        <system.icon className="w-7 h-7 text-[color:var(--accent-warning-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {system.title}
                        </h3>
                        <p className="text-[color:var(--text-silver-100)]/80 text-sm">
                          {system.description}
                        </p>
                      </div>
                    </div>

                    {/* 功能特性 */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">技术特点</h4>
                      <div className="space-y-3">
                        {system.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-5 h-5 text-[color:var(--accent-warning-500)] mt-0.5 flex-shrink-0" />
                            <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 性能指标 */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-warning-500)] uppercase tracking-wider mb-3">
                        性能指标
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(system.performance).map(([key, value], perfIndex) => (
                          <div key={perfIndex} className="flex justify-between items-center text-sm">
                            <span className="text-[color:var(--text-silver-100)]/70">
                              {key === 'throughput' && '处理能力'}
                              {key === 'accuracy' && '分拣准确率'}
                              {key === 'errorRate' && '错分率'}
                              {key === 'recognition' && '识别精度'}
                              {key === 'flexibility' && '适应能力'}
                              {key === 'automation' && '自动化程度'}
                            </span>
                            <span className="text-[color:var(--accent-warning-500)] font-semibold">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 应用效果总结 */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-[color:var(--accent-warning-500)]/5 backdrop-blur-sm rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">自动分拣系统应用效果</h4>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-warning-500)] mb-2">15000件/h</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">高吞吐处理能力</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-warning-500)] mb-2">0.05%</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">错分率低至</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[color:var(--accent-warning-500)] mb-2">60%+</div>
                  <p className="text-[color:var(--text-silver-100)]/80 text-sm">拣选工时降幅</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 其他相关硬件设备 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Monitor className="w-6 h-6 text-[color:var(--accent-logistics-500)] mr-3" />
              其他相关硬件设备
            </h2>

            <div className="space-y-8">
              {otherEquipment.map((equipment, index) => (
                <motion.div
                  key={index}
                  className="card-base p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center">
                      <equipment.icon className="w-7 h-7 text-[color:var(--accent-logistics-500)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                        {equipment.title}
                      </h3>
                      {equipment.description && (
                        <p className="text-[color:var(--text-silver-100)]/80 text-sm">
                          {equipment.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 设备类型 */}
                  {equipment.types && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {equipment.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <h4 className="text-lg font-bold text-[color:var(--text-silver-100)] mb-2">
                            {type.name}
                          </h4>
                          <p className="text-[color:var(--text-silver-100)]/80 mb-3 text-sm">
                            {type.description}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-[color:var(--accent-logistics-500)] rounded-full flex-shrink-0" />
                                <span className="text-[color:var(--text-silver-100)]/85 text-xs">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 设备功能和应用 */}
                  {equipment.features && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">功能特性</h4>
                        <div className="space-y-3">
                          {equipment.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[color:var(--accent-logistics-500)] mt-0.5 flex-shrink-0" />
                              <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        {equipment.applications && (
                          <div>
                            <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">典型应用</h4>
                            <div className="space-y-2">
                              {equipment.applications.map((application, appIndex) => (
                                <div key={appIndex} className="bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-lg p-3">
                                  <span className="text-[color:var(--text-silver-100)]/85 text-sm">
                                    {application}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {equipment.performance && (
                          <div>
                            <h4 className="text-sm font-semibold text-[color:var(--accent-automation-500)] uppercase tracking-wider mb-3">
                              性能表现
                            </h4>
                            <div className="space-y-2">
                              {Object.entries(equipment.performance).map(([key, value], perfIndex) => (
                                <div key={perfIndex} className="flex justify-between items-center text-sm">
                                  <span className="text-[color:var(--text-silver-100)]/70">
                                    {key === 'speed' && '运行速度'}
                                    {key === 'precision' && '定位精度'}
                                    {key === 'efficiency' && '存储效率'}
                                  </span>
                                  <span className="text-[color:var(--accent-automation-500)] font-semibold">
                                    {value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 设备协同案例 */}
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
              {integrationCase.title}
            </h2>

            <p className="text-[color:var(--text-silver-100)]/80 text-lg mb-8">
              {integrationCase.description}
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* 工作流程 */}
              <div>
                <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-6">协同工作流程</h3>
                <div className="space-y-4">
                  {integrationCase.workflow.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: stepIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* 连接线 */}
                      {stepIndex < integrationCase.workflow.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-8 bg-[color:var(--accent-logistics-500)]/30" />
                      )}
                      
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-logistics-500)] to-[color:var(--accent-logistics-500)]/70 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{stepIndex + 1}</span>
                        </div>
                        <div className="flex-1 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <span className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                            {step}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 协同效益 */}
              <div>
                <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-6">协同效益</h3>
                <div className="space-y-4">
                  {integrationCase.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Zap className="w-6 h-6 text-[color:var(--accent-automation-500)] mt-0.5 flex-shrink-0" />
                      <span className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/software-systems"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            智慧仓储软件系统组成
          </Link>
          
          <Link 
            to="/course/warehouse-types" 
            className="btn-primary flex items-center group"
          >
            智慧仓储主要类型
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HardwareEquipmentPage;