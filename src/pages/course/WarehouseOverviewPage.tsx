import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Target,
  Zap,
  Settings,
  Network,
  ArrowLeft,
  ArrowRight
} from '../../components/Icons';

const WarehouseOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="glass-card p-8 mb-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[color:var(--accent-logistics-500)] rounded-l-2xl" />
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-[color:var(--accent-logistics-500)] rounded-2xl flex items-center justify-center mr-6">
              <Network className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[color:var(--text-silver-100)] mb-2">
                第一章：智慧仓储系统概述
              </h1>
              <p className="text-[color:var(--text-silver-100)]/80 text-lg">
                全面了解智慧仓储的定义、发展阶段与核心目标
              </p>
            </div>
          </div>
        </motion.div>

        {/* 第一节：智慧仓储的定义与发展 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-6 flex items-center">
              <BookOpen className="w-6 h-6 text-[color:var(--accent-logistics-500)] mr-3" />
              （一）智慧仓储的定义与发展
            </h2>

            {/* 定义 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[color:var(--text-silver-100)] mb-4">智慧仓储的定义</h3>
              <div className="bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-transparent p-6 rounded-xl mb-4">
                <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                  智慧仓储是借助自动化、信息化及智能化技术，对仓储全流程实施高效、精准且灵活管理的现代化仓储模式。其核心是以自动化设备、信息系统与智能算法为支撑，覆盖入库、存储、出库的完整流程。
                </p>
              </div>
            </div>

            {/* 发展阶段 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[color:var(--text-silver-100)] mb-4">发展阶段</h3>
              
              {/* 1.0机械化阶段 */}
              <motion.div 
                className="card-base p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[color:var(--accent-logistics-500)] font-bold">1.0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-2">机械化阶段</h4>
                    <p className="text-[color:var(--text-silver-100)]/80 mb-3">
                      主要依靠叉车、输送线等设备替代人工搬运。例如，传统小型仓库中，人工搬运货物效率低下，引入叉车后，能快速搬运大量货物，输送线的使用则实现了货物的连续输送，大幅提升了搬运效率。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[color:var(--accent-logistics-500)]/10 text-[color:var(--accent-logistics-500)] rounded-lg text-sm">叉车</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-logistics-500)]/10 text-[color:var(--accent-logistics-500)] rounded-lg text-sm">输送线</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-logistics-500)]/10 text-[color:var(--accent-logistics-500)] rounded-lg text-sm">人工替代</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2.0自动化阶段 */}
              <motion.div 
                className="card-base p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-automation-500)]/20 to-[color:var(--accent-automation-500)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[color:var(--accent-automation-500)] font-bold">2.0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-2">自动化阶段</h4>
                    <p className="text-[color:var(--text-silver-100)]/80 mb-3">
                      以自动化立体仓库（AS/RS）与仓库控制系统（WCS）协同作业为特征，可实现24小时无人化运作。比如大型电商物流中心，AS/RS系统的货架能自动升降，WCS系统控制输送设备与货架运行，无论昼夜都能自动完成货物的存储与取出，降低人工成本与时间消耗。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[color:var(--accent-automation-500)]/10 text-[color:var(--accent-automation-500)] rounded-lg text-sm">AS/RS</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-automation-500)]/10 text-[color:var(--accent-automation-500)] rounded-lg text-sm">WCS</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-automation-500)]/10 text-[color:var(--accent-automation-500)] rounded-lg text-sm">24小时运作</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3.0信息化阶段 */}
              <motion.div 
                className="card-base p-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[color:var(--accent-warning-500)]/20 to-[color:var(--accent-warning-500)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[color:var(--accent-warning-500)] font-bold">3.0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-2">信息化阶段</h4>
                    <p className="text-[color:var(--text-silver-100)]/80 mb-3">
                      着重于仓库管理系统（WMS）与企业资源规划系统（ERP）的业务信息流打通。以服装企业为例，WMS记录服装的入库、库存及出库情况，ERP管理企业整体资源与订单，两者连通后，企业可实时掌握服装库存数量、订单生产与发货状态，使业务流程更为顺畅。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[color:var(--accent-warning-500)]/10 text-[color:var(--accent-warning-500)] rounded-lg text-sm">WMS</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-warning-500)]/10 text-[color:var(--accent-warning-500)] rounded-lg text-sm">ERP</span>
                      <span className="px-3 py-1 bg-[color:var(--accent-warning-500)]/10 text-[color:var(--accent-warning-500)] rounded-lg text-sm">信息流打通</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 4.0智能化阶段 */}
              <motion.div 
                className="card-base p-6 border-2 border-[color:var(--accent-logistics-500)]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold">4.0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[color:var(--text-silver-100)] mb-2">智能化阶段</h4>
                    <p className="text-[color:var(--text-silver-100)]/80 mb-3">
                      融入AI算法、数字孪生、5G AGV群控等技术，朝着"分钟级履约"迈进。在智能仓储中，AI算法依据历史订单数据预测货物需求，提前备货；数字孪生技术模拟仓储运作，提前发现问题；5G AGV群控实现多台AGV协同工作，快速完成订单拣选与发货。例如大型快递分拣中心，5G AGV群控可在短时间内将不同目的地的包裹快速分拣，达成分钟级履约。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">AI算法</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">数字孪生</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">5G AGV群控</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">分钟级履约</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 发展趋势 */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[color:var(--text-silver-100)] mb-4">发展趋势</h3>
              <div className="bg-gradient-to-r from-green-500/10 to-transparent p-6 rounded-xl">
                <p className="text-[color:var(--text-silver-100)]/85 leading-relaxed mb-4">
                  智慧仓储系统的发展趋势是朝着更加智能化、绿色化、集成化方向演进。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="text-[color:var(--accent-logistics-500)] font-semibold mb-2">智能化</h5>
                    <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                      AI、大数据等技术将深度融入仓储管理
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="text-[color:var(--accent-automation-500)] font-semibold mb-2">绿色化</h5>
                    <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                      注重节能设备的应用和环保仓储方案的实施
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                    <h5 className="text-[color:var(--accent-warning-500)] font-semibold mb-2">集成化</h5>
                    <p className="text-[color:var(--text-silver-100)]/70 text-sm">
                      实现仓储系统与上下游供应链的深度集成
                    </p>
                  </div>
                </div>
                <p className="text-[color:var(--text-silver-100)]/70 text-sm mt-4">
                  例如未来的智慧仓储可能会应用太阳能供电的自动化设备，实现绿色节能，同时与供应商和客户的系统高度集成，实现供应链的全流程协同优化。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 第二节：智慧仓储的核心目标 */}
        <section className="mb-12">
          <motion.div
            className="glass-effect-light p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[color:var(--text-silver-100)] mb-6 flex items-center">
              <Target className="w-6 h-6 text-[color:var(--accent-automation-500)] mr-3" />
              （二）智慧仓储的核心目标
            </h2>

            <div className="space-y-6">
              {/* 目标一：提高仓储效率 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="card-base p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-logistics-500)]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-7 h-7 text-[color:var(--accent-logistics-500)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-3">
                        其一：提高仓储效率
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 leading-relaxed mb-4">
                        通过智慧仓储技术缩短收、存、拣、发各环节作业周期。
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-semibold text-[color:var(--text-silver-100)]">收货环节：</span>
                            <span className="text-[color:var(--text-silver-100)]/75"> 智能扫码设备可快速扫描货物信息，减少人工登记时间</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-semibold text-[color:var(--text-silver-100)]">存储环节：</span>
                            <span className="text-[color:var(--text-silver-100)]/75"> 自动化货架依货物特点自动调整存储位置，提升空间利用率与存取效率</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-semibold text-[color:var(--text-silver-100)]">拣选环节：</span>
                            <span className="text-[color:var(--text-silver-100)]/75"> 智能分拣系统快速识别并分类拣选货物，比人工拣选速度大幅提升</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <span className="font-semibold text-[color:var(--text-silver-100)]">发货环节：</span>
                            <span className="text-[color:var(--text-silver-100)]/75"> 自动化包装设备迅速完成货物包装与发货准备</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-[color:var(--accent-logistics-500)]/10 rounded-xl">
                        <p className="text-[color:var(--text-silver-100)]/85 text-sm">
                          <strong>案例：</strong>以生鲜电商仓库为例，收货时扫码设备快速录入货物信息，存储时自动化货架依货物保鲜要求与周转速度调整位置，拣选时智能分拣系统快速分拣生鲜货物，发货时自动化包装设备迅速完成包装，各环节作业周期显著缩短。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 目标二：降低运营成本 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-base p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-automation-500)]/20 to-[color:var(--accent-automation-500)]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Settings className="w-7 h-7 text-[color:var(--accent-automation-500)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-3">
                        其二：降低运营成本
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 leading-relaxed mb-4">
                        自动化设备的应用减少人工占比与差错率。人工成本是仓储运营的重要部分，自动化设备投入可减少对大量人工的依赖。如使用自动化码垛机码放货物，相较人工码垛，不仅降低人力成本，还提高码垛整齐度与效率，降低差错率。同时，智慧仓储系统可减少货物损坏与丢失，间接降低成本。
                      </p>
                      
                      <div className="mt-4 p-4 bg-[color:var(--accent-automation-500)]/10 rounded-xl">
                        <p className="text-[color:var(--text-silver-100)]/85 text-sm">
                          <strong>案例：</strong>以化工产品仓库为例，自动化搬运与存储设备减少人工搬运过程中可能造成的产品损坏，降低运营成本。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 目标三：提升库存管理精度 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="card-base p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[color:var(--accent-warning-500)]/20 to-[color:var(--accent-warning-500)]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-[color:var(--accent-warning-500)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-3">
                        其三：提升库存管理精度
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 leading-relaxed mb-4">
                        依托WMS实时数据实现≥99%的库存准确率。WMS实时监控每件货物的位置、数量与状态。
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-[color:var(--accent-warning-500)] text-2xl font-bold mb-2">≥99%</div>
                          <div className="text-[color:var(--text-silver-100)]/70 text-sm">库存准确率</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-[color:var(--accent-warning-500)] text-2xl font-bold mb-2">实时</div>
                          <div className="text-[color:var(--text-silver-100)]/70 text-sm">数据监控</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-[color:var(--accent-warning-500)]/10 rounded-xl">
                        <p className="text-[color:var(--text-silver-100)]/85 text-sm">
                          <strong>案例：</strong>以大型超市仓库为例，WMS准确知晓每种商品库存数量，库存低于警戒线时及时提醒补货，避免缺货；同时把控库存周转情况，合理调整库存，防止积压。如某品牌日用品仓库，WMS实时跟踪每种日用品库存，依据销售数据预测需求，保证库存准确率达99%以上，既满足市场需求，又避免库存过多导致的成本浪费。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 目标四：增强响应市场变化的能力 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="card-base p-6 border-2 border-green-500/30">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Network className="w-7 h-7 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[color:var(--text-silver-100)] mb-3">
                        其四：增强响应市场变化的能力
                      </h3>
                      <p className="text-[color:var(--text-silver-100)]/80 leading-relaxed mb-4">
                        多系统协同使订单履约时间从天级缩短至小时级。在市场需求快速变化时，智慧仓储系统能快速响应。
                      </p>
                      
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-500/10 px-4 py-2 rounded-lg">
                          <span className="text-red-400 font-semibold">传统：天级</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-[color:var(--text-silver-100)]/50" />
                        <div className="bg-green-500/10 px-4 py-2 rounded-lg">
                          <span className="text-green-400 font-semibold">智慧：小时级</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-green-500/10 rounded-xl">
                        <p className="text-[color:var(--text-silver-100)]/85 text-sm">
                          <strong>案例：</strong>电商大促期间，订单量大幅增加，智慧仓储系统中WMS、ERP等多系统协同工作，快速调配货物，优化拣选与发货流程，将订单履约时间从几天缩短至几小时。例如双11期间，某电商的智慧仓储系统通过多系统协同，快速处理大量订单，短时间内将商品送达消费者手中，增强企业对市场变化的响应能力。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 页面导航 */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            to="/"
            className="btn-glass flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            返回首页
          </Link>
          
          <Link 
            to="/course/software-systems"
            className="btn-primary flex items-center group"
          >
            下一章：智慧仓储软件系统
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarehouseOverviewPage;