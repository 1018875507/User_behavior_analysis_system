package service;

import entity.*;

import java.util.List;

public interface anaylse_service {
    List<user_anaylse> get_user_anayls(); // 省份
    List<action_sum> get_action_sum(); // 折线
    List<all_behavior_analyse> get_all_behavior_analyse(); // 词云
    List<career_number> get_career_number(); // 职业
    List<cluster_user> get_cluster_user(); // 渠道
    List<res_number> get_res_number(); // 漏斗

}
