package com.OOs.onlineOrdering.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class OnlineOrderingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlineOrderingSystemApplication.class, args);
	}

}
