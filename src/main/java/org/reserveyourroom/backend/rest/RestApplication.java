package org.reserveyourroom.backend.rest;

import io.swagger.jaxrs.config.BeanConfig;

import javax.ws.rs.core.Application;
import javax.ws.rs.ApplicationPath;

@ApplicationPath("/api")
public class RestApplication extends Application {

    public RestApplication(){
        // Swagger integration
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setTitle("API Documentation");
        beanConfig.setDescription("Read the documentation");
        beanConfig.setSchemes(new String[] { "http" });
        beanConfig.setHost("localhost:8080");
        beanConfig.setBasePath("/api");
        beanConfig.setResourcePackage("org.reserveyourroom.backend");
        beanConfig.setScan(true);
    }
}