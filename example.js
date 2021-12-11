import request from "./axiosRequest";

export default {
  // 获取某收货地址
  get_address_detail(id, data) {
    const url = '/api/address/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改某收货地址
  put_address_detail(id, data) {
    const url = '/api/address/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除某收货地址
  delete_address_detail(id, data) {
    const url = '/api/address/detail/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取用户的某收货地址
  get_address_list(data) {
    const url = '/api/address/list/';
    return request('get', url, data);
  },

  // 添加收货地址
  post_address_list(data) {
    const url = '/api/address/list/';
    return request('post', url, data);
  },

  // 添加商城/店铺主要信息
  post_business_add(data) {
    const url = '/api/business/add/';
    return request('post', url, data);
  },

  // 获取商城/店铺主要详情
  get_business_detail_mine(data) {
    const url = '/api/business/detail/mine/';
    return request('get', url, data);
  },

  // 修改商城/店铺主要信息
  put_business_detail_mine(data) {
    const url = '/api/business/detail/mine/';
    return request('put', url, data);
  },

  // 获取商城/店铺主要详情
  get_business_detail(id, data) {
    const url = '/api/business/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改商城/店铺主要信息
  put_business_detail(id, data) {
    const url = '/api/business/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 获取筛选条件列表
  get_business_filter_list(type, data) {
    const url = '/api/business/filter/list/{type}/'.replace('{type}', type);
    return request('get', url, data);
  },

  // 添加商城店铺分类
  post_business_mall_cate_add(data) {
    const url = '/api/business/mall/cate/add/';
    return request('post', url, data);
  },

  // 获取商城店铺分类列表
  get_business_mall_cate_list(mall_id, data) {
    const url = '/api/business/mall/cate/list/{mall_id}/'.replace('{mall_id}', mall_id);
    return request('get', url, data);
  },

  // 获取商城店铺分类详情
  get_business_mall_cate(id, data) {
    const url = '/api/business/mall/cate/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改商城店铺分类信息
  put_business_mall_cate(id, data) {
    const url = '/api/business/mall/cate/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除某商城店铺分类
  delete_business_mall_cate(id, data) {
    const url = '/api/business/mall/cate/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取商城列表
  get_business_mall_list(data) {
    const url = '/api/business/mall/list/';
    return request('get', url, data);
  },

  // 获取商城的店铺列表
  get_business_mall_shop_list(data) {
    const url = '/api/business/mall/shop/list/';
    return request('get', url, data);
  },

  // 获取外卖店铺分类列表
  get_business_shop_cate_list(type, data) {
    const url = '/api/business/shop/cate/list/{type}/'.replace('{type}', type);
    return request('get', url, data);
  },

  // 添加店铺扩展信息
  post_business_shop_ext_add(data) {
    const url = '/api/business/shop/ext/add/';
    return request('post', url, data);
  },

  // 获取店铺扩展详情
  get_business_shop_ext_detail_mine(data) {
    const url = '/api/business/shop/ext/detail/mine/';
    return request('get', url, data);
  },

  // 修改店铺扩展信息
  put_business_shop_ext_detail_mine(data) {
    const url = '/api/business/shop/ext/detail/mine/';
    return request('put', url, data);
  },

  // 获取店铺扩展详情
  get_business_shop_ext_detail(id, data) {
    const url = '/api/business/shop/ext/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改店铺扩展信息
  put_business_shop_ext_detail(id, data) {
    const url = '/api/business/shop/ext/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 添加购物车
  post_cart_add(data) {
    const url = '/api/cart/add/';
    return request('post', url, data);
  },

  // 批量添加购物车
  post_cart_batch_add(data) {
    const url = '/api/cart/batch/add/';
    return request('post', url, data);
  },

  // 批量删除购物车商品
  delete_cart_batch_delete(data) {
    const url = '/api/cart/batch/delete/';
    return request('delete', url, data);
  },

  // 删除购物车某商品
  delete_cart_delete(cart_id, data) {
    const url = '/api/cart/delete/{cart_id}/'.replace('{cart_id}', cart_id);
    return request('delete', url, data);
  },

  // 获取购物车列表
  get_cart_list(shop_id, data) {
    const url = '/api/cart/list/{shop_id}/'.replace('{shop_id}', shop_id);
    return request('get', url, data);
  },

  // 添加优惠券
  post_coupon_add(data) {
    const url = '/api/coupon/add/';
    return request('post', url, data);
  },

  // 修改优惠券
  put_coupon_edit(id, data) {
    const url = '/api/coupon/edit/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除优惠券
  delete_coupon_edit(id, data) {
    const url = '/api/coupon/edit/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取优惠券列表
  get_coupon_list_scope(shop_id, scope, data) {
    const url = '/api/coupon/list/scope/{shop_id}/{scope}/'.replace('{shop_id}', shop_id).replace('{scope}', scope);
    return request('get', url, data);
  },

  // 获取优惠券列表
  get_coupon_list(shop_id, data) {
    const url = '/api/coupon/list/{shop_id}/'.replace('{shop_id}', shop_id);
    return request('get', url, data);
  },

  // 获取优惠券列表
  get_coupon_list_$1(shop_id, status, data) {
    const url = '/api/coupon/list/{shop_id}/{status}/'.replace('{shop_id}', shop_id).replace('{status}', status);
    return request('get', url, data);
  },

  // 上传文件 size缩略图尺寸如 200*200(长*宽)
  post_files_upload(data) {
    const url = '/api/files/upload/';
    return request('post', url, data);
  },

  // 上传文件
  post_files_upload_for_editor(data) {
    const url = '/api/files/upload/for/editor';
    return request('post', url, data);
  },

  // 添加商品消息
  post_goods_add(data) {
    const url = '/api/goods/add/';
    return request('post', url, data);
  },

  // 某店铺的商品的评价列表
  get_goods_appraisal_list_for_shop(shop_id, data) {
    const url = '/api/goods/appraisal/list/for/shop/{shop_id}/'.replace('{shop_id}', shop_id);
    return request('get', url, data);
  },

  // 某商品的评价列表
  get_goods_appraisal_list(goods_id, data) {
    const url = '/api/goods/appraisal/list/{goods_id}/'.replace('{goods_id}', goods_id);
    return request('get', url, data);
  },

  // 发布评价
  post_goods_appraisal_publish(data) {
    const url = '/api/goods/appraisal/publish/';
    return request('post', url, data);
  },

  // 举报商品评价
  post_goods_appraisal_report(data) {
    const url = '/api/goods/appraisal/report/';
    return request('post', url, data);
  },

  // 添加商品属性值
  post_goods_attribute_add(data) {
    const url = '/api/goods/attribute/add/';
    return request('post', url, data);
  },

  // 修改商品属性值
  put_goods_attribute_edit(id, data) {
    const url = '/api/goods/attribute/edit/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除商品属性值
  delete_goods_attribute_edit(id, data) {
    const url = '/api/goods/attribute/edit/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 添加商品分类
  post_goods_cate_add(data) {
    const url = '/api/goods/cate/add/';
    return request('post', url, data);
  },

  // 修改商品分类
  put_goods_cate_edit(id, data) {
    const url = '/api/goods/cate/edit/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除商品分类
  delete_goods_cate_edit(id, data) {
    const url = '/api/goods/cate/edit/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取商品分类列表
  get_goods_cate_list(shop_id, data) {
    const url = '/api/goods/cate/list/{shop_id}/'.replace('{shop_id}', shop_id);
    return request('get', url, data);
  },

  // 获取商品详情
  get_goods_detail(id, data) {
    const url = '/api/goods/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改商品信息
  put_goods_detail(id, data) {
    const url = '/api/goods/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除某商品
  delete_goods_detail(id, data) {
    const url = '/api/goods/detail/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 商品的星级数量额统计列表
  get_goods_goods_appraisal_statistics_list(data) {
    const url = '/api/goods/goods/appraisal/statistics/list/';
    return request('get', url, data);
  },

  // 某商品的属性名属性值列表
  get_goods_item_attribute_list(goods_id, data) {
    const url = '/api/goods/item/attribute/list/{goods_id}/'.replace('{goods_id}', goods_id);
    return request('get', url, data);
  },

  // 商品列表(app端用)
  get_goods_list(data) {
    const url = '/api/goods/list/';
    return request('get', url, data);
  },

  // 店铺的商品列表(pc端用)
  get_goods_list_for_shop(data) {
    const url = '/api/goods/list/for/shop/';
    return request('get', url, data);
  },

  // 某订单的评价列表
  get_goods_order_appraisal_list(order_id, data) {
    const url = '/api/goods/order/appraisal/list/{order_id}/'.replace('{order_id}', order_id);
    return request('get', url, data);
  },

  // 搜索商品
  get_goods_search_list(data) {
    const url = '/api/goods/search/list/';
    return request('get', url, data);
  },

  // 获取订单的店铺评价
  get_goods_shop_appraisal_detail(order_id, data) {
    const url = '/api/goods/shop/appraisal/detail/{order_id}/'.replace('{order_id}', order_id);
    return request('get', url, data);
  },

  // 某店铺的评价列表
  get_goods_shop_appraisal_list(shop_id, data) {
    const url = '/api/goods/shop/appraisal/list/{shop_id}/'.replace('{shop_id}', shop_id);
    return request('get', url, data);
  },

  // 发布店铺评价
  post_goods_shop_appraisal_publish(data) {
    const url = '/api/goods/shop/appraisal/publish/';
    return request('post', url, data);
  },

  // 举报商铺评价
  post_goods_shop_appraisal_report(data) {
    const url = '/api/goods/shop/appraisal/report/';
    return request('post', url, data);
  },

  // 店铺的星级数量额统计列表
  get_goods_shop_appraisal_statistics_list(data) {
    const url = '/api/goods/shop/appraisal/statistics/list/';
    return request('get', url, data);
  },

  // 添加商品属性项
  post_goods_template_item_add(data) {
    const url = '/api/goods/template/item/add/';
    return request('post', url, data);
  },

  // 修改商品属性项
  put_goods_template_item_edit(id, data) {
    const url = '/api/goods/template/item/edit/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除商品属性项
  delete_goods_template_item_edit(id, data) {
    const url = '/api/goods/template/item/edit/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取消息详情
  get_msg_detail(msg_id, data) {
    const url = '/api/msg/detail/{msg_id}/'.replace('{msg_id}', msg_id);
    return request('get', url, data);
  },

  // 删除消息
  delete_msg_detail(msg_id, data) {
    const url = '/api/msg/detail/{msg_id}/'.replace('{msg_id}', msg_id);
    return request('delete', url, data);
  },

  // 获取消息列表
  get_msg_list(type, data) {
    const url = '/api/msg/list/{type}/'.replace('{type}', type);
    return request('get', url, data);
  },

  // 获取用户新消息数
  get_msg_tips(data) {
    const url = '/api/msg/tips/';
    return request('get', url, data);
  },

  // 添加公告
  post_news_add(data) {
    const url = '/api/news/add';
    return request('post', url, data);
  },

  // 
  get_news_content_for_json(type, data) {
    const url = '/api/news/content/for/json/{type}/'.replace('{type}', type);
    return request('get', url, data);
  },

  // 获取公告详情
  get_news_detail(id, data) {
    const url = '/api/news/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改公告
  put_news_detail(id, data) {
    const url = '/api/news/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 删除公告
  delete_news_detail(id, data) {
    const url = '/api/news/detail/{id}/'.replace('{id}', id);
    return request('delete', url, data);
  },

  // 获取h5详情
  get_news_h5_detail(id, data) {
    const url = '/api/news/h5/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 首页焦点图列表
  get_news_home_focus(key, data) {
    const url = '/api/news/home/focus/{key}/'.replace('{key}', key);
    return request('get', url, data);
  },

  // 获某平台和商城的公告列表
  get_news_list_for_mall_platform(mall_id, data) {
    const url = '/api/news/list/for/mall/platform/{mall_id}/'.replace('{mall_id}', mall_id);
    return request('get', url, data);
  },

  // 获平台公告列表
  get_news_list_for_platform(data) {
    const url = '/api/news/list/for/platform/';
    return request('get', url, data);
  },

  // 获某店铺/商城自己的公告列表
  get_news_list_for_shop(business_id, data) {
    const url = '/api/news/list/for/shop/{business_id}/'.replace('{business_id}', business_id);
    return request('get', url, data);
  },

  // 订单费用计算(多商品)
  post_order_batch_cost(data) {
    const url = '/api/order/batch/cost/';
    return request('post', url, data);
  },

  // 生成订单(多商品)
  post_order_batch_create(data) {
    const url = '/api/order/batch/create/';
    return request('post', url, data);
  },

  // 订单费用计算
  post_order_cost(data) {
    const url = '/api/order/cost/';
    return request('post', url, data);
  },

  // 生成订单
  post_order_create(data) {
    const url = '/api/order/create/';
    return request('post', url, data);
  },

  // 获取某订单详情
  get_order_detail(order_id, data) {
    const url = '/api/order/detail/{order_id}/'.replace('{order_id}', order_id);
    return request('get', url, data);
  },

  // 获取店铺的需要开的发票列表  都有page分页功能
  get_order_invoice_list(invoice_status, data) {
    const url = '/api/order/invoice/list/{invoice_status}/'.replace('{invoice_status}', invoice_status);
    return request('get', url, data);
  },

  // 获取用户的订单列表  都有page分页功能
  get_order_list(data) {
    const url = '/api/order/list/';
    return request('get', url, data);
  },

  // 商城的成交订单数、成交金额统计列表
  get_order_mall_statistics_list(data) {
    const url = '/api/order/mall/statistics/list/';
    return request('get', url, data);
  },

  // 修改订单
  put_order_modify(order_id, data) {
    const url = '/api/order/modify/{order_id}/'.replace('{order_id}', order_id);
    return request('put', url, data);
  },

  // 订单支付
  post_order_order_pay(data) {
    const url = '/api/order/order/pay/';
    return request('post', url, data);
  },

  // 订单支付结果查询
  get_order_order_pay_status_alipay(order_id, data) {
    const url = '/api/order/order/pay/status/alipay/{order_id}/'.replace('{order_id}', order_id);
    return request('get', url, data);
  },

  // 获取微信订单支付状态
  get_order_order_pay_status_wx(order_id, data) {
    const url = '/api/order/order/pay/status/wx/{order_id}/'.replace('{order_id}', order_id);
    return request('get', url, data);
  },

  // 退款申请
  post_order_order_return(data) {
    const url = '/api/order/order/return/';
    return request('post', url, data);
  },

  // 同意申请退款
  put_order_refund_agree(data) {
    const url = '/api/order/refund/agree/';
    return request('put', url, data);
  },

  // 拒绝申请退款
  put_order_refund_reject(data) {
    const url = '/api/order/refund/reject/';
    return request('put', url, data);
  },

  // 店铺的商品品类的成交订单数、成交金额统计列表
  get_order_shop_statistics_list(data) {
    const url = '/api/order/shop/statistics/list/';
    return request('get', url, data);
  },

  // 发送绑定手机号验证码
  post_sms_bind(data) {
    const url = '/api/sms/bind/';
    return request('post', url, data);
  },

  // 发送邮箱验证码
  post_sms_email(data) {
    const url = '/api/sms/email/';
    return request('post', url, data);
  },

  // 发送忘记密码验证码
  post_sms_forgot(data) {
    const url = '/api/sms/forgot/';
    return request('post', url, data);
  },

  // 是否超过30分钟(用于pc端的更换平台分配)
  get_sms_is_expired(data) {
    const url = '/api/sms/is/expired/';
    return request('get', url, data);
  },

  // 发送手机号登录验证码
  post_sms_login(data) {
    const url = '/api/sms/login/';
    return request('post', url, data);
  },

  // 发送注册验证码
  post_sms_register(data) {
    const url = '/api/sms/register/';
    return request('post', url, data);
  },

  // 添加店铺
  post_users_add(data) {
    const url = '/api/users/add/';
    return request('post', url, data);
  },

  // 提现申请
  post_users_cash_log_apply(data) {
    const url = '/api/users/cash/log/apply/';
    return request('post', url, data);
  },

  // 获取提现记录列表
  get_users_cash_log_list(data) {
    const url = '/api/users/cash/log/list/';
    return request('get', url, data);
  },

  // 添加收藏
  post_users_collect(data) {
    const url = '/api/users/collect/';
    return request('post', url, data);
  },

  // 取消收藏
  delete_users_collect_cancle(target_id, type, data) {
    const url = '/api/users/collect/cancle/{target_id}/{type}/'.replace('{target_id}', target_id).replace('{type}', type);
    return request('delete', url, data);
  },

  // 获取收藏列表
  get_users_collect_mine_list(type, data) {
    const url = '/api/users/collect/mine/list/{type}/'.replace('{type}', type);
    return request('get', url, data);
  },

  // 领取优惠券
  post_users_coupon_add(data) {
    const url = '/api/users/coupon/add/';
    return request('post', url, data);
  },

  // 订单可用优惠券列表
  get_users_coupon_available_list(shop_id, money, data) {
    const url = '/api/users/coupon/available/list/{shop_id}/{money}/'.replace('{shop_id}', shop_id).replace('{money}', money);
    return request('get', url, data);
  },

  // 我的优惠券
  get_users_coupon_list(status, data) {
    const url = '/api/users/coupon/list/{status}/'.replace('{status}', status);
    return request('get', url, data);
  },

  // 当前用户详情
  get_users_currentUser(data) {
    const url = '/api/users/currentUser/';
    return request('get', url, data);
  },

  // 用户详情
  get_users_detail(id, data) {
    const url = '/api/users/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 修改用户信息
  put_users_detail(id, data) {
    const url = '/api/users/detail/{id}/'.replace('{id}', id);
    return request('put', url, data);
  },

  // 设置用户的设备token
  post_users_device(data) {
    const url = '/api/users/device/';
    return request('post', url, data);
  },

  // 添加用户反馈
  post_users_feedback(data) {
    const url = '/api/users/feedback/';
    return request('post', url, data);
  },

  // 用户反馈列表
  get_users_feedback_list(data) {
    const url = '/api/users/feedback/list/';
    return request('get', url, data);
  },

  // 获取店铺商城的财务记录列表  都有page分页功能
  get_users_financial_log(data) {
    const url = '/api/users/financial/log/';
    return request('get', url, data);
  },

  // 找回密码/重置密码
  put_users_forgot_password(data) {
    const url = '/api/users/forgot/password/';
    return request('put', url, data);
  },

  // 发票详情
  get_users_invoice_detail(id, data) {
    const url = '/api/users/invoice/detail/{id}/'.replace('{id}', id);
    return request('get', url, data);
  },

  // 发票历史列表
  get_users_invoice_list(data) {
    const url = '/api/users/invoice/list/';
    return request('get', url, data);
  },

  // 开发票
  post_users_invoice_post(data) {
    const url = '/api/users/invoice/post/';
    return request('post', url, data);
  },

  // 用户登录
  post_users_login(data) {
    const url = '/api/users/login/';
    return request('post', url, data);
  },

  // 手机验证码登录
  post_users_loginForSms(data) {
    const url = '/api/users/loginForSms/';
    return request('post', url, data);
  },

  // 添加招商入驻信息
  post_users_merchants_post(data) {
    const url = '/api/users/merchants/post/';
    return request('post', url, data);
  },

  // 修改用户信息
  put_users_modify_info(data) {
    const url = '/api/users/modify/info/';
    return request('put', url, data);
  },

  // 修改密码
  put_users_modify_password(data) {
    const url = '/api/users/modify/password/';
    return request('put', url, data);
  },

  // 用户注册
  post_users_register(data) {
    const url = '/api/users/register/';
    return request('post', url, data);
  },

  // 微信扫码绑定
  put_users_weixin_bind(data) {
    const url = '/api/users/weixin/bind/';
    return request('put', url, data);
  },
};
