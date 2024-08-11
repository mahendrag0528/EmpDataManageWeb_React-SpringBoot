package com.mahi.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.mahi.springboot.model.Employee;
import com.mahi.springboot.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	
	public void run(String...args) throws Exception {
//		Employee employee=new Employee();
//		employee.setFirstName("ramesh");
//		employee.setLastName("gadda");
//		employee.setEmailId("ramesh@gmail.com");
//		employeeRepository.save(employee);
//		
//		Employee employee1=new Employee();
//		employee1.setFirstName("suresh");
//		employee1.setLastName("goud");
//		employee1.setEmailId("suresh@gmail.com");
//		employeeRepository.save(employee1);
	}
}
