import _ from "lodash";
import regex from "./regex";
/*
 * @Author: PengTao
 * @Date: 2019-05-30 11:33:20
 * @LastEditors: PengTao
 * @LastEditTime: 2019-05-30 17:44:51
 * @Description: 校验是否为特殊字符
 */
const specialCharUtil = {}
specialCharUtil.test = str => {
  if (_.isString(str)) {
    return regex.specialChar.test(str);
  }
  return false
};
specialCharUtil.replace = str => {
  if (_.isString(str)) {
    return str.replace(/[`~!@#$%^&*()\-+=<>?:,.\/;'\\[\]·！￥…（）—{}|《》？：“”【】、；‘’，。]/ig, '');
  }
  return str
};
export default specialCharUtil
