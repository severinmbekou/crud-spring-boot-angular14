package com.androidcorpo.springcrud.repo;

import com.androidcorpo.springcrud.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Severin Mbekou <mbekou99@gmail.com>
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
