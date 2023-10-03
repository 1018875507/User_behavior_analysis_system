package service.impl;

import dao.anaylse_dao;
import dao.impl.anaylse_dao_impl;
import entity.*;
import service.anaylse_service;

import java.util.List;

public class anaylse_service_impl implements anaylse_service {
    anaylse_dao dao = new anaylse_dao_impl();
    @Override
    public List<user_anaylse> get_user_anayls() {
        return dao.get_user_anayls();
    }

    @Override
    public List<action_sum> get_action_sum() {
        return dao.get_action_sum();
    }

    @Override
    public List<all_behavior_analyse> get_all_behavior_analyse() {
        return dao.get_all_behavior_analyse();
    }

    @Override
    public List<career_number> get_career_number() {
        return dao.get_career_number();
    }

    @Override
    public List<cluster_user> get_cluster_user() {
        return dao.get_cluster_user();
    }

    @Override
    public List<res_number> get_res_number() {
        return dao.get_res_number();
    }
}
