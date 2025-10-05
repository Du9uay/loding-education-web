import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Target, Network, Camera, Film, Edit3, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Trophy, Sparkles, CheckCircle, Calculator, Eye, N8N } from '../components/Icons';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '智慧仓储系统的各个组成部分';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const careerPaths = [
    {
      title: '智慧物流解决方案工程师',
      skills: [
        { name: '智慧仓储架构蓝图设计', desc: '统筹硬件、软件与业务流，输出整体解决方案以匹配客户场景', highlight: true },
        { name: 'AS/RS仓库可行性与ROI评估', desc: '基于堆垛机自动存取原理测算库容提升与投资回收期' },
        { name: 'WMS × 流程集成实施', desc: '将库存、波次与KPI逻辑固化到系统参数并落地测试' },
        { name: '收货-存储自动化链路配置', desc: '应用分拣机器人与智能储位算法缩短上架时长' },
        { name: 'AGV-AMR协同搬运策略', desc: '设计多机器人路径与调度规则，降低空驶率' },
        { name: 'TMS路径优化与车辆调度', desc: '制定运输网络与计划模型，提高发货及时率' }
      ],
      color: 'logistics'
    },
    {
      title: '智能仓储工程师',
      skills: [
        { name: '机电系统选型与布局规划', desc: '根据库型与业务量完成货架、堆垛机及输送线布置', highlight: true },
        { name: 'WMS数据建模与参数配置', desc: '编制库位、批次、策略等主数据以支撑日常运行' },
        { name: '智能储位与库存映射算法优化', desc: '通过规则与AI混合模型降低错放率与补货次数' },
        { name: 'AGV调度逻辑实现', desc: '设计优先级、充电窗与避障策略，保障生产节拍' },
        { name: '车辆-波次-TMS协同测试', desc: '验证波次与车次排程匹配度并输出改进措施' },
        { name: '智能搬运机器人接口调试', desc: '完成PLC／MES／WMS三方通信联调，打通搬运链' }
      ],
      color: 'automation'
    },
    {
      title: '智能仓储运维工程师',
      skills: [
        { name: '设备状态监测与预诊断', desc: '建立传感数据阈值，提前预警系统异常', highlight: true },
        { name: 'AS/RS故障定位与快换', desc: '熟练掌握堆垛机常见故障代码与部件替换' },
        { name: 'WMS日志分析与性能调优', desc: '通过SQL与监控仪表盘定位瓶颈并调整索引' },
        { name: '分拣机器人保养SOP制定', desc: '建立润滑、校准与部件更换周期标准' },
        { name: 'AGV电池与导航系统维护', desc: '执行电池循环与SLAM地图更新，确保持续运行' },
        { name: 'TMS-搬运系统应急恢复', desc: '在网络或调度故障时执行手动回滚与任务重分配' }
      ],
      color: 'warning'
    },
    {
      title: '无人仓拣选工程师',
      skills: [
        { name: '无人仓流程规划与任务分配', desc: '设计"货到人"工位节拍与任务池逻辑', highlight: true },
        { name: '视觉识别与分拣算法调优', desc: '运用深度学习改进条码/图像识别精度' },
        { name: '动态储位映射与实时库存同步', desc: '利用位置信息流实现货位-库存自动映射' },
        { name: 'AGV-AMR混合调度控制', desc: '在同域调度多车型机器人，提升通行效率' },
        { name: '路径优化与车-单-波次联动', desc: '结合TMS数据动态调整拣选顺序与路径' },
        { name: 'KPI监控与持续改进', desc: '建立拣选速度、准确率等指标并做持续优化' }
      ],
      color: 'logistics'
    }
  ];

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-[color:var(--accent-logistics-500)] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Network className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-base-50 mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              智慧物流与自动化核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/85 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            通过系统性学习智慧仓储系统知识，掌握自动化仓储核心技术，
            培养具备智慧仓储系统设计、运维、管理和优化能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[color:var(--accent-logistics-500)] via-[color:var(--accent-automation-500)] to-[color:var(--accent-logistics-500)] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这节课
          </motion.h1>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* 数字人播放器1 - 为什么要学习这节课标题 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIP0m8sOUa.mov"
            position={{ top: 0, right: '-16rem' }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业？</h2>
              <p className="text-[color:var(--accent-automation-500)] mt-2">智慧物流正迎来爆发式增长，成为全球制造业和物流行业转型的核心驱动力</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-deep p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-主图.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--accent-logistics-500)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--accent-automation-500)]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--accent-logistics-500)]">原因与现状</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-智能化与自动化浪潮.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[color:var(--accent-logistics-500)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">智能化与自动化浪潮</h4>
                    <p className="text-base-50/90 text-sm">
                      大数据、AI技术的广泛应用，自动化仓储系统、AGV小车、机械臂等智能设备的普及，让物流行业正在经历<span className="font-bold text-[color:var(--accent-logistics-500)]">从传统物流向智能物流的转型</span>
                    </p>
                  </motion.div>

                  {/* 技术迭代 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-市场需求激增.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-[color:var(--accent-logistics-500)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">市场需求激增</h4>
                    <p className="text-base-50/90 text-sm">
                      <span className="font-bold text-[color:var(--accent-logistics-500)]">电商与快速消费品行业</span>的蓬勃发展，使得智慧物流成为必不可少的核心竞争力
                    </p>
                  </motion.div>

                  {/* 需求广泛 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-AI与大数据赋能.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-[color:var(--accent-logistics-500)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">AI与大数据赋能</h4>
                    <p className="text-base-50/90 text-sm">
                      智能调度、路径规划、库存管理等环节，AI技术帮助企业实现数据驱动的决策，极大提升了物流效率和服务质量
                    </p>
                  </motion.div>

                  {/* 职业机遇 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-人才缺口巨大.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-[color:var(--accent-logistics-500)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">人才缺口巨大</h4>
                    <p className="text-base-50/90 text-sm">
                      对于能够快速上手的智能物流技术人才仍存在巨大缺口，能够操作AGV、机械臂、RFID设备等智能设备的<span className="font-bold text-[color:var(--accent-logistics-500)]">复合型人才</span>，薪资待遇和市场竞争力日益上升
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--accent-automation-500)]">结果导向</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-对企业来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-[color:var(--accent-logistics-500)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">对企业来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      通过智慧物流技术的应用，企业可以提高运营效率、减少人力成本、提升客户满意度，进而增强市场竞争力，帮助企业在行业竞争中脱颖而出。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-对学生来说.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-[color:var(--accent-logistics-500)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">对学生来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      通过学习智慧物流课程，学生能够掌握前沿技术，<span className="font-bold text-[color:var(--accent-logistics-500)]">快速进入行业</span>核心岗位，具备跨行业的就业优势。<span className="font-bold text-[color:var(--accent-logistics-500)]">薪资起步6~8K</span>，并且随着经验的积累增长迅速，行业前景广阔。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器2 - 为什么要关注行业 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIP0m8mekF.mov"
            position={{ top: 380, right: '-16rem' }}
          />
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-[color:var(--accent-automation-500)] mt-2">精准定位企业类型，把握职业发展方向，走在行业前沿</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-上游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-logistics-500)]">上游企业</h3>
                        <span className="text-[color:var(--accent-logistics-500)]/60 text-sm font-semibold">基础资源</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">提供智能物流所需的"硬件"和技术基础，确保系统稳定运行</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">自动化设备制造商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">信息技术与软件开发公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">物联网技术与设备供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">物流硬件与设备供应商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--accent-logistics-500)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-中游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-logistics-500)]">中游企业</h3>
                        <span className="text-[color:var(--accent-logistics-500)]/60 text-sm font-semibold">创意核心</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">核心是技术集成与系统集成，提供完整的智慧物流解决方案</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">智慧物流系统集成商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">智慧仓储解决方案提供商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">物流优化咨询公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">技术研发与创新公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--accent-logistics-500)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--accent-logistics-500)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-下游企业.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--accent-logistics-500)]">下游企业</h3>
                        <span className="text-[color:var(--accent-logistics-500)]/60 text-sm font-semibold">市场触达</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">面向最终客户，推动技术应用的落地，提升物流效率</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">电商平台与零售企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">物流公司与快递企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">供应链管理公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--accent-logistics-500)] rounded-full animate-pulse"></div>
                          <span className="text-white/85 text-sm">制造企业与工厂</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-automation-500)]/10 rounded-2xl border border-[color:var(--accent-logistics-500)]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white text-lg font-semibold text-center">
              不同的企业类型对应不同的技术需求，掌握清晰的行业定位，能够帮助你快速找到适合自己的职业方向，进入合适的企业，获得更快的职业发展
            </p>
          </motion.div>

          {/* 数字人播放器3 - 为什么要分清企业类型 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIP0m8xrCP.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-[color:var(--accent-automation-500)] mt-2">精准定位岗位，掌握高薪技能，快速进入智慧物流高薪行业</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-设计与规划.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-logistics-500)] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-logistics-500)] ml-3">业务部</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">负责智能物流项目的<span className="font-bold text-[color:var(--accent-logistics-500)]">整体业务规划与前期方案设计</span>，统筹市场调研、客户需求分析、项目投标与方案制定等环节。通过整合技术、设备与数据资源，确保项目方案具备可行性、经济性与实施落地性。</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">智能物流项目经理</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">产品经理</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期拍摄 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-设备与系统运维.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-logistics-500)] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-logistics-500)] ml-3">设备部</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">负责智能仓储设备和系统的<span className="font-bold text-[color:var(--accent-logistics-500)]">安装、调试、运行与维护</span>，确保物流设备的高效稳定运行</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">AGV运维专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">设备运维工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">设备调试工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">智慧仓库管理员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">技术支持工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">售后服务工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期制作 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-数据与优化.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-logistics-500)] rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-logistics-500)] ml-3">数据部</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">利用<span className="font-bold text-[color:var(--accent-logistics-500)]">数据分析与优化</span>技术提升物流流程效率，应用AI与大数据进行路径优化、需求预测等工作</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">数据分析工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">物流数据优化工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">AI算法工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 宣传运营 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是-技术支持与售后服务.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--accent-logistics-500)] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--accent-logistics-500)] ml-3">系统部</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">负责智能物流系统的<span className="font-bold text-[color:var(--accent-logistics-500)]">软件开发、系统集成与技术保障</span>，包括WMS、WCS及调度系统的开发、部署与运维。确保系统与设备、数据、业务流程的高效联动，为客户提供长期稳定的技术支持与服务。</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">WMS系统工程师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--accent-logistics-500)]" />
                    <span className="text-white/85 text-sm">WCS系统工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-effect p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--accent-logistics-500)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-6 text-center">普遍要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-automation-500)]/20 border border-[color:var(--accent-logistics-500)]/30">
                  <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">门槛要求</div>
                  <p className="text-base-50/90 text-sm">技术/经验要求＞学历要求，注重动手能力和实践经验</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-automation-500)]/20 border border-[color:var(--accent-logistics-500)]/30">
                  <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">平均薪资</div>
                  <p className="text-base-50/90 text-sm">行业<span className="font-bold text-white">平均薪资在7K+</span>，项目提成和技术岗位<span className="font-bold text-white">能突破10K+</span>，<span className="font-bold text-white">高端岗位薪资可达20K+</span></p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-automation-500)]/20 border border-[color:var(--accent-logistics-500)]/30">
                  <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">职业前景</div>
                  <p className="text-base-50/90 text-sm">技术岗位具有<span className="font-bold text-white">快速晋升空间</span>，几年后可转型为项目管理等高薪岗位</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/20 to-[color:var(--accent-automation-500)]/20 border border-[color:var(--accent-logistics-500)]/30">
                  <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">作业特点</div>
                  <p className="text-base-50/90 text-sm">部分岗位需要现场工作，涉及技术支持与设备调试，岗位成长空间和职业发展都具有较高的<span className="font-bold text-white">稳定性</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-[color:var(--accent-automation-500)] mt-2">掌握实战技能，提升效率，轻松进入智慧物流高薪岗位</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/10 to-cyan-600/10 p-8 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_浓缩十余年的核心经验_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-logistics-500)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">单元课程目录</h3>
                </div>

                <div className="space-y-4">
                  {/* 智慧仓储与自动化设备 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">1. 智慧仓储与自动化设备</span>
                    <div className="text-white/85 text-sm mt-2 space-y-1">
                      <p>• 智能仓储系统从设备到系统的全解析（1节）</p>
                      <p>• 自动化立体仓库（AS/RS）：提升效率的核心模式（1节）</p>
                      <p>• WMS仓储管理系统的应用技巧（1节）</p>
                      <p>• 从调试到运维的全程实战（3节）</p>
                    </div>
                  </div>

                  {/* 仓储与物流流程技术 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">2. 仓储与物流流程技术</span>
                    <div className="text-white/85 text-sm mt-2 space-y-1">
                      <p>• 收货流程技术：如何实现自动分拣与智能周转（2节）</p>
                      <p>• 存储流程技术：智能化储位与物料管理优化（1节）</p>
                      <p>• 发料流程技术：AGV智能运作与周转箱管理精解（1节）</p>
                      <p>• 发货流程技术：路径优化与TMS系统高效对接（2节）</p>
                    </div>
                  </div>

                  {/* 智能物流与AI技术 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">3. 智能物流与AI技术</span>
                    <div className="text-white/85 text-sm mt-2 space-y-1">
                      <p>• 智能搬运机器人如何革新物流（1节）</p>
                      <p>• 企业如何实现智慧物流转型（2节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--gold-cinema)]/10 p-8 border border-[color:var(--accent-automation-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_更加精准，清晰的职业方向_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-automation-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-logistics-500)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">本节课课程内容</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">深入理解<span className="font-bold text-[color:var(--accent-logistics-500)]">智慧仓储系统的组成</span>与应用</span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">通过<span className="font-bold text-[color:var(--accent-logistics-500)]">路径处理</span>与<span className="font-bold text-[color:var(--accent-logistics-500)]">路径优化</span></span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">学习如何<span className="font-bold text-[color:var(--accent-logistics-500)]">调试与运维堆垛机、AGV、机器人等设备</span></span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">学习如何利用<span className="font-bold text-[color:var(--accent-logistics-500)]">AI规划路径、预测库存、图像识别</span></span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">学习<span className="font-bold text-[color:var(--accent-logistics-500)]">WMS、WCS系统的操作</span></span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-automation-500)]/10 p-8 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_在企业中才会了解到的工作流程_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-logistics-500)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">中邮科技：广州邮政全链路自动化分拣中心</span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">海康威视：AGV小车运作案例详解</span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-white font-semibold text-base">顺丰 × 新石器：城市级L4无人车配送生态网络建设项目</span>
                    </div>
                    <p className="text-base-50/90 text-sm"></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-automation-500)]/10 p-8 border border-[color:var(--accent-logistics-500)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_前沿的AI工具_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--accent-logistics-500)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--accent-logistics-500)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--accent-logistics-500)]">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">n8n</span>
                    </div>
                    <p className="text-white/85 text-sm mt-1"><span className="font-bold text-[color:var(--accent-logistics-500)]">低代码自动化编排</span>，把 WMS/TMS、传感器 Webhook、钉钉/企微告警串起来；异常包裹→自动建单→派工→回执闭环</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">Google OR-Tools</span>
                    </div>
                    <p className="text-white/85 text-sm mt-1">开源优化套件，解决车辆路径规划（VRP）、装载优化与波次拣选排程；可对接 TMS/WMS 做一键"最优路线+时窗约束"</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-[color:var(--accent-logistics-500)]" />
                      <span className="text-[color:var(--accent-logistics-500)] font-semibold text-base">Project44</span>
                    </div>
                    <p className="text-white/85 text-sm mt-1">通过实时运输数据分析，运用AI进行供应链可视化管理，预测货物运输的潜在问题，并给出解决方案，提升运输的准确性与效率</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 数字人播放器4 - 通过学习，你能学到什么 - 右侧上方 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIP0m8FIsw.mov"
            position={{ top: 300, right: '-16rem' }}
          />

          {/* 数字人播放器5 - 通过学习，你能学到什么 - 右侧下方 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIP0m896Uq.mov"
            position={{ top: 900, right: '-16rem' }}
          />
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-automation-500)]/10 rounded-3xl p-8 border border-[color:var(--accent-logistics-500)]/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-[color:var(--accent-logistics-500)]" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-automation-500)]/10 rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">7K-10K</div>
                <div className="text-[color:var(--accent-automation-500)] text-sm">
                  <div>设备运维工程师</div>
                  <div>WMS系统操作员</div>
                  <div>AGV运维专员</div>
                  <div>仓库管理员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-automation-500)]/10 to-[color:var(--accent-logistics-500)]/10 rounded-2xl p-6 border border-[color:var(--accent-automation-500)]/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">10K-15K</div>
                <div className="text-[color:var(--accent-automation-500)] text-sm">
                  <div>系统工程师</div>
                  <div>数据分析工程师</div>
                  <div>项目主管</div>
                  <div>技术支持经理</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--accent-logistics-500)]/10 to-[color:var(--accent-warning-500)]/10 rounded-2xl p-6 border border-[color:var(--accent-logistics-500)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--accent-logistics-500)] mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">20K+</div>
                <div className="text-[color:var(--accent-automation-500)] text-sm">
                  <div>智能物流项目经理</div>
                  <div>AI算法专家</div>
                  <div>系统架构师</div>
                  <div>物流优化总监</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 职业发展前景板块 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 页面标题 - 带动画 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[color:var(--accent-logistics-500)] to-[color:var(--accent-automation-500)] rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl font-bold text-base-50 mb-4">职业发展前景</h1>
            <p className="text-lg text-base-50/80 max-w-2xl mx-auto">
              通过本节课的学习，你可以掌握以下岗位的技能
            </p>
          </motion.div>

          {/* 职业发展路径 - 每行两个岗位 */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              {careerPaths.map((path, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 overflow-hidden relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[color:var(--accent-logistics-500)] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-base-50">
                    {path.title}
                  </h3>
                  <div className="space-y-3">
                    {path.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className={`w-4 h-4 mt-1 mr-2 flex-shrink-0 ${skill.highlight ? 'text-green-400' : 'text-white/20'}`} />
                        <div>
                          <span className={`font-medium ${skill.highlight ? 'text-white' : 'text-white/40'}`}>
                            {skill.name}
                          </span>
                          <p className={`text-sm mt-1 ${skill.highlight ? 'text-white/80' : 'text-white/30'}`}>
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          <motion.h2 
                            className="text-3xl font-bold text-base-50 mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的智慧仓储学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/85 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从基础认知到实践应用，循序渐进掌握智慧仓储系统精髓。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/warehouse-overview"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                开始学习
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 