// projects数据表结构
{
  _id: Schema.Types.ObjectId,     // 主键
  chTitle: String,                // 中文项目名
  enTitle: String,                // 英文项目名
  tag: [Schema.Types.ObjectId],   // 外键（项目标签id）
  author: String,                 // 参与者
  profile: String,                // 项目简介
  createTime: Date,               // 创作时间
  introduce: String,              // 作品介绍
  url: String,                    // 作品地址
  img:  String,                   // 作品缩略图
  markdown: String,               // 作品markdown
  showKind: Number,               // 显示类型（大小显示）
  sort: { 
    type: Number, 
    min: 0
  },                              // 排序显示（越小优先显示）
  updateTime: {
    type: Date, 
    default: Date.now 
  },                              // 最后更新时间
  insertTime: {
    type: Date,
    default: Date.now
  },                              // 插入时间
  isShow: {
    type: Boolean,
    default: true
  },                              // 是否显示（默认显示）
  isRecommend: {
    type: Boolean,
    default: false                
  }                               // 是否精选
}
