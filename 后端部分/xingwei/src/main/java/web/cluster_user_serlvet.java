package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.career_number;
import entity.cluster_user;
import service.anaylse_service;
import service.impl.anaylse_service_impl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "cluster_user_serlvet",value ="/cluster_user" )
public class cluster_user_serlvet extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected  void   doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        anaylse_service service = new anaylse_service_impl();
        List<cluster_user> list = service.get_cluster_user();
        System.out.println(list.toString());
        response.setContentType("application/json;charset=UTF-8");
        String respjson = objectMapper.writeValueAsString(list);
        response.getWriter().write(respjson);
    }
}

/*request.setAttribute("score", list);
request.getRequestDispatcher("WEB-INF/page/booklist.jsp").forward(request,response);*/