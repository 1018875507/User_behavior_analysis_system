package dao.impl;

import dao.anaylse_dao;
import entity.*;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import service.anaylse_service;
import utils.JdbcUtil;

import java.sql.SQLException;
import java.util.List;

public class anaylse_dao_impl implements anaylse_dao {
    private QueryRunner runner = new QueryRunner(JdbcUtil.getDataSource());
    //省份
    @Override
    public List<user_anaylse> get_user_anayls() {
        String sql = "SELECT *  FROM user_anaylse ";
        try {
            return runner.query(sql,new BeanListHandler<>(user_anaylse.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    //每日折线图
    @Override
    public List<action_sum> get_action_sum() {
        String sql = "select * from action_sum order by CONVERT(`adate`,DATE) ASC";
        try {
            return runner.query(sql,new BeanListHandler<>(action_sum.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    //词云行为图
    @Override
    public List<all_behavior_analyse> get_all_behavior_analyse() {

        String sql = "SELECT *  FROM all_behavior_analyse";
        try {
            return runner.query(sql,new BeanListHandler<>(all_behavior_analyse.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    //职业图
    @Override
    public List<career_number> get_career_number() {
        String sql = "SELECT * FROM career_number ORDER BY number ASC";
        try {
            return runner.query(sql,new BeanListHandler<>(career_number.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    //渠道来源图
    @Override
    public List<cluster_user> get_cluster_user() {
        String sql = "SELECT *  FROM cluster_user";
        try {
            return runner.query(sql,new BeanListHandler<>(cluster_user.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    //漏斗图
    @Override
    public List<res_number> get_res_number() {
        String sql = "SELECT * FROM res_number ORDER BY res DESC LIMIT 4";
        try {
            return runner.query(sql,new BeanListHandler<>(res_number.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
