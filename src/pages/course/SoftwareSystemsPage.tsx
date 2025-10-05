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

const SoftwareSystemsPage: React.FC = () => {
  // WMS功能模块
  const wmsModules = [
    {
      title: "库存管理",
      description: "借助条码识别、RFID等技术，精准跟踪库存物品",
      features: [
        "数量管理：误差率可控制在0.1%以内",
        "位置管理：定位精度达±5cm", 
        "库存预警：预警响应时间≤5分钟",
        "周转优化：库存周转率提高40%"
      ],
      metrics: {
        accuracy: "99.9%",
        response: "≤5分钟",
        improvement: "40%"
      },
      icon: Monitor
    },
    {
      title: "订单处理",
      description: "涵盖接收、审核、分配等流程，0.5秒内完成有效性审核",
      features: [
        "订单接收：0.5秒内完成有效性审核",
        "智能分配：订单分配准确率达99%",
        "实时跟踪：查询响应时间≤1秒",
        "处理能力：日处理订单量达10万单"
      ],
      metrics: {
        speed: "0.5秒",
        accuracy: "99%",
        capacity: "10万单/日"
      },
      icon: Target
    },
    {
      title: "作业调度",
      description: "综合考虑仓库布局、设备状态、人员负荷等因素进行智能调度",
      features: [
        "入库调度：2秒内规划最优入库路径",
        "出库调度：1秒内调度堆垛机等设备",
        "动态调整：3分钟内重新调度作业",
        "效率提升：出入库时间缩短至5分钟内"
      ],
      metrics: {
        planning: "2秒",
        dispatch: "1秒",
        efficiency: "50%↑"
      },
      icon: Settings
    }
  ];

  // WCS控制功能
  const wcsModules = [
    {
      title: "设备协同调度",
      description: "控制协调多种自动化设备，进行队列管理与碰撞避免",
      capabilities: [
        "堆垛机调度：1秒内分配作业任务",
        "输送线调度：0.5秒内规划货物传输路径",
        "穿梭车和AGV调度：2秒内规划行驶路径",
        "同时调度设备数量：500台以上"
      ],
      performance: {
        devices: "500台+",
        response: "≤0.5秒",
        efficiency: "40%↑"
      },
      icon: Network
    },
    {
      title: "实时监控与故障处理",
      description: "HMI动态显示设备状态，故障时推送报警与处理建议",
      capabilities: [
        "状态监控：每秒采集设备运行参数",
        "故障报警：0.5秒内推送报警信息",
        "处理建议：提供详细维修指导",
        "故障修复：MTTR＜10分钟"
      ],
      performance: {
        monitoring: "1秒/次",
        alert: "0.5秒",
        mttr: "＜10分钟"
      },
      icon: Monitor
    },
    {
      title: "算法支撑",
      description: "采用路径平衡、任务优先级、能耗优化等算法",
      capabilities: [
        "路径平衡：3秒内平衡设备行驶路径",
        "任务优先级：0.2秒内分配任务优先级",
        "能耗优化：1秒内优化能耗",
        "空驶率降低：15-20%"
      ],
      performance: {
        balancing: "3秒",
        priority: "0.2秒",
        reduction: "15-20%"
      },
      icon: Zap
    }
  ];

  // ERP管控功能
  const erpModules = [
    {
      title: "宏观管控",
      description: "负责财务、采购、销售、生产计划等宏观管控",
      functions: [
        "财务管控：0.5小时内核算仓库作业成本",
        "采购管理：2小时内生成精准采购需求计划",
        "销售管理：1小时内安排销售发货",
        "生产计划：2小时内制定生产计划"
      ],
      metrics: {
        financial: "0.5小时",
        procurement: "95%准确率",
        production: "30%提升"
      },
      icon: Users
    },
    {
      title: "计划-执行-反馈闭环",
      description: "与WMS形成\"计划-执行-反馈\"闭环管理",
      functions: [
        "计划环节：1小时内制定并传递宏观计划",
        "执行环节：WMS依据计划进行微观作业",
        "反馈环节：1小时内反馈作业执行情况",
        "计划调整：2小时内调整优化计划"
      ],
      metrics: {
        planning: "1小时",
        feedback: "98%准确率",
        adjustment: "2小时"
      },
      icon: Target
    }
  ];

  // 系统集成特点
  const integrationFeatures = [
    {
      title: "信息流与物流同步",
      description: "WMS与自动化设备集成实现信息流与物流同步",
      benefits: [
        "设备响应时间≤0.8秒",
        "信息传输时间≤1秒",
        "库存准确率达99.9%",
        "出入库效率提高30%"
      ],
      icon: Network
    },
    {
      title: "多系统协同",
      description: "WMS、WCS、ERP三大系统协同工作",
      benefits: [
        "业务流程无缝衔接",
        "数据实时共享交换",
        "决策支持智能化",
        "运营效率大幅提升"
      ],
      icon: Settings
    }
  ];

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
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-silver-100)] mb-2">
                智慧仓储软件系统组成
              </h1>
              <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                掌握WMS、WCS、ERP等核心软件系统的功能与集成应用
            </p>
          </div>
        </div>
        </motion.div>

        {/* WMS仓储管理系统 */}
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
              仓储管理系统（WMS）
            </h2>

            {/* 功能详细介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                仓储管理系统（Warehouse Management System，简称WMS）是智慧仓储软件系统的重要组成部分。
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {wmsModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-base p-8 hover:shadow-2xl transition-all duration-500">
                    {/* 模块标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center">
                        <module.icon className="w-8 h-8 text-[color:var(--accent-logistics-500)]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[color:var(--text-silver-100)]">
                          {module.title}
                        </h3>
                        <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    {/* 功能特性 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">功能特性</h4>
                        <div className="space-y-3">
                          {module.features.map((feature, featureIndex) => (
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

                      {/* 性能指标 */}
                      <div>
                        <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-4">性能指标</h4>
                        <div className="space-y-4">
                          {Object.entries(module.metrics).map(([key, value], metricIndex) => (
                            <motion.div
                              key={metricIndex}
                              className="bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-xl p-4"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + metricIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-[color:var(--text-silver-100)]/80 text-sm">
                                  {key === 'accuracy' && '准确率'}
                                  {key === 'response' && '响应时间'}
                                  {key === 'improvement' && '效率提升'}
                                  {key === 'speed' && '处理速度'}
                                  {key === 'capacity' && '处理能力'}
                                  {key === 'planning' && '规划时间'}
                                  {key === 'dispatch' && '调度时间'}
                                  {key === 'efficiency' && '效率提升'}
                                </span>
                                <span className="text-[color:var(--accent-logistics-500)] font-bold">
                                  {value}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WMS集成案例 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-xl">
              <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">实际应用案例</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-logistics-500)] mb-2">服装企业案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某服装企业引入WMS系统后，通过精准的库存管理，避免了因库存积压或短缺导致的资金浪费和订单延误，库存周转率提高了40%。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-logistics-500)] mb-2">电商平台案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某电商平台使用WMS系统处理订单，高峰期日处理订单量达10万单，订单处理及时率保持在99.5%以上，提升了客户满意度。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-logistics-500)] mb-2">大型电子企业案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某大型电子企业仓库，WMS与自动化设备集成后，货物出入库效率提高30%，库存盘点时间从原来的3天缩短至1天，节省了大量人力和时间成本。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* WCS仓库控制系统 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Settings className="w-6 h-6 text-[color:var(--accent-automation-500)] mr-3" />
              仓库控制系统（WCS）
            </h2>

            {/* WCS介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                仓库控制系统（Warehouse Control System，简称WCS）主要负责控制和协调各种自动化设备的运行，从而实现仓储作业的自动化。
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {wcsModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="relative h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6 flex flex-col">
                    {/* 模块标题 */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-automation-500)]/20 to-[color:var(--accent-automation-500)]/10 rounded-xl flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-[color:var(--accent-automation-500)]" />
                      </div>
                      <h3 className="text-lg font-bold text-[color:var(--text-silver-100)]">
                        {module.title}
                      </h3>
                    </div>

                    <p className="text-[color:var(--text-silver-100)]/80 mb-6 flex-grow">
                      {module.description}
                    </p>

                    {/* 功能能力 */}
                    <div className="space-y-3 mb-6">
                      {module.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capIndex}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + capIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-[color:var(--accent-automation-500)] rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                            {capability}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* 性能表现 */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-automation-500)] uppercase tracking-wider mb-3">
                        性能表现
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(module.performance).map(([key, value], perfIndex) => (
                          <div key={perfIndex} className="bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-lg p-2">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-[color:var(--text-silver-100)]/70">
                                {key === 'devices' && '设备数量'}
                                {key === 'response' && '响应时间'}
                                {key === 'efficiency' && '效率提升'}
                                {key === 'monitoring' && '监控频率'}
                                {key === 'alert' && '报警速度'}
                                {key === 'mttr' && '修复时间'}
                                {key === 'balancing' && '路径平衡'}
                                {key === 'priority' && '任务分配'}
                                {key === 'reduction' && '空驶率降低'}
                              </span>
                              <span className="text-[color:var(--accent-automation-500)] font-semibold">
                                {value}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WCS实际案例 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-automation-500)]/10 to-transparent rounded-xl">
              <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">实际应用案例</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-automation-500)] mb-2">智能仓库案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某智能仓库有200台堆垛机、100条输送线、50台穿梭车和AGV，通过WCS协同调度，设备运行效率提高40%。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-automation-500)] mb-2">物流中心案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某物流中心仓库采用WCS后，货物搬运效率大幅提升，出入库时间从平均8分钟缩短到3分钟，设备利用率提高40%，每年节省设备运营成本约50万元。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-automation-500)] mb-2">算法优化案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某仓库应用路径平衡算法后，巷道空驶率从25%降至18%，设备能耗降低12%。使用具备算法支撑的WCS后，运营成本降低15%，设备使用寿命延长20%。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ERP企业资源计划系统 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-8 flex items-center">
              <Users className="w-6 h-6 text-[color:var(--accent-warning-500)] mr-3" />
              企业资源计划系统（ERP）
            </h2>

            {/* ERP介绍 */}
            <div className="mb-8 p-6 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-xl">
              <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed">
                企业资源计划系统（Enterprise Resource Planning，简称ERP）在智慧仓储软件系统中扮演着宏观管控的角色。它负责财务、采购、销售、生产计划等重要环节。
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {erpModules.map((module, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    {/* 模块标题 */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-warning-500)]/20 to-[color:var(--accent-warning-500)]/10 rounded-2xl flex items-center justify-center">
                        <module.icon className="w-7 h-7 text-[color:var(--accent-warning-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {module.title}
                        </h3>
                        <p className="text-[color:var(--text-silver-100)]/80">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    {/* 功能列表 */}
                    <div className="space-y-3 mb-6">
                      {module.functions.map((func, funcIndex) => (
                        <motion.div
                          key={funcIndex}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + funcIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-5 h-5 text-[color:var(--accent-warning-500)] mt-0.5 flex-shrink-0" />
                          <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                            {func}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* 关键指标 */}
                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-[color:var(--accent-warning-500)] uppercase tracking-wider mb-3">
                        关键指标
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {Object.entries(module.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center text-sm">
                            <span className="text-[color:var(--text-silver-100)]/70">
                              {key === 'financial' && '财务核算'}
                              {key === 'procurement' && '采购准确率'}
                              {key === 'production' && '生产计划提升'}
                              {key === 'planning' && '计划制定'}
                              {key === 'feedback' && '反馈准确率'}
                              {key === 'adjustment' && '计划调整'}
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

            {/* ERP实际案例 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-warning-500)]/10 to-transparent rounded-xl">
              <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-4">实际应用案例</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-warning-500)] mb-2">制造企业案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某制造企业引入ERP后，采购成本降低10%，生产计划执行率提高到98%。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-warning-500)] mb-2">企业集团案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某企业集团通过ERP宏观管控，实现了跨部门资源的优化配置，生产周期缩短20%，库存资金占用减少30%。
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h4 className="text-lg font-semibold text-[color:var(--accent-warning-500)] mb-2">闭环管理案例</h4>
                  <p className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                    某企业通过"计划-执行-反馈"闭环管理，生产效率提高20%，库存周转率提升30%，每年增加经济效益约200万元。当WMS反馈原材料入库延迟时，ERP 1小时内调整生产计划，确保生产顺利进行。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 系统集成与协同 */}
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
              系统集成与协同
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {integrationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full card-base p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-[color:var(--accent-logistics-500)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[color:var(--text-silver-100)]">
                          {feature.title}
                        </h3>
                        <p className="text-[color:var(--text-silver-100)]/80">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          className="flex items-start gap-3 p-3 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-5 h-5 rounded-full bg-[color:var(--accent-logistics-500)]/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full" />
                          </div>
                          <span className="text-[color:var(--text-silver-100)]/85 text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/course/warehouse-overview"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            智慧仓储系统概述
          </Link>
          
          <Link 
            to="/course/hardware-equipment" 
            className="btn-primary flex items-center group"
          >
            智慧仓储硬件设备组成
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSystemsPage;