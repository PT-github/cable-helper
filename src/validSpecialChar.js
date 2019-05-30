import _ from "lodash";
import regex from "./regex";
/*
 * @Author: PengTao
 * @Date: 2019-05-30 11:33:20
 * @LastEditors: PengTao
 * @LastEditTime: 2019-05-30 14:54:57
 * @Description: 校验是否为特殊字符
 */
export default str => {
  if (_.isString(str)) {
    return regex.specialChar.test(str);
  }
};
