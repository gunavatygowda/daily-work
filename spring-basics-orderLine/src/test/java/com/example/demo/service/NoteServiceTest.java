package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.repository.Order1Repository;

@ExtendWith(MockitoExtension.class)
class NoteServiceTest {

	@InjectMocks
	private NoteService noteService;

	@Mock
	private Order1Repository order1Repository;

	@Mock
	private PaymentService paymentService;

	@Mock
	private EmailService emailService;

	//createorder

	// MISSING ITEM NAME
	@Test
	void testMissingItemName() {
		Order1 order = new Order1();

		OrderLine line = new OrderLine();
		line.setItem("");
		line.setPrice(10);
		line.setQuantity(2);

		order.setOrderLines(List.of(line));

		assertThrows(IllegalArgumentException.class, () -> noteService.addOrder(order));
	}
	// INVALID PRICE
	@Test
	void testInvalidPrice() {
		Order1 order = new Order1();

		OrderLine line = new OrderLine();
		line.setItem("Pen");
		line.setPrice(-10);
		line.setQuantity(2);

		order.setOrderLines(List.of(line));

		assertThrows(IllegalArgumentException.class, () -> noteService.addOrder(order));
	}
	// EMPTY ORDER LINES
	@Test
	void testEmptyOrderLines() {
		Order1 order = new Order1();
		order.setOrderLines(new ArrayList<>());

		assertThrows(IllegalArgumentException.class, () -> noteService.addOrder(order));
	}
	// INVALID QUANTITY
	@Test
	void testInvalidQuantity() {
		Order1 order = new Order1();

		OrderLine line = new OrderLine();
		line.setItem("Pen");
		line.setPrice(10);
		line.setQuantity(0);

		order.setOrderLines(List.of(line));

		assertThrows(IllegalArgumentException.class, () -> noteService.addOrder(order));
	}
}