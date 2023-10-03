package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.action_sum;
import service.anaylse_service;
import service.impl.anaylse_service_impl;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "action_sum_serlvet",value ="/action_sum" )
public class action_sum_serlvet extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected  void   doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        anaylse_service service = new anaylse_service_impl();
        List<action_sum> list = service.get_action_sum();
        System.out.println(list.toString());
        response.setContentType("application/json;charset=UTF-8");
        String respjson = objectMapper.writeValueAsString(list);
        response.getWriter().write(respjson);

    }
}

/*request.setAttribute("score", list);
request.getRequestDispatcher("WEB-INF/page/booklist.jsp").forward(request,response);*/