package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.entity.OrderLine;
import com.example.demo.service.NoteService;

@ExtendWith(MockitoExtension.class)
class NoteControllerTest {

    @InjectMocks
    private NoteController noteController;

    @Mock
    private NoteService noteService;

    @Test
    void testGetOrder() {

        when(noteService.getOrder()).thenReturn(new ArrayList<>());

        Iterable<Order1> result = noteController.getOrder();

        assertNotNull(result);

        verify(noteService, times(1)).getOrder();
    }

    @Test
    void testGetOrderById_Exists() {

        Order1 order = new Order1();
        order.setId(1);

        when(noteService.getOrderById(1)).thenReturn(Optional.of(order));

        Optional<Order1> result = noteController.getOrderById(1);

        assertTrue(result.isPresent());
        assertEquals(1, result.get().getId());

        verify(noteService, times(1)).getOrderById(1);
    }

    @Test
    void testCreateOrder() {

        Order1 order = new Order1();
        order.setOrderLines(new ArrayList<>());

        OrderLine line = new OrderLine();
        line.setItem("Pen");
        line.setPrice(20);
        line.setQuantity(2);

        order.getOrderLines().add(line);

        when(noteService.addOrder(order)).thenReturn(1);

        Integer result = noteController.createOrder(order);

        assertEquals(1, result);

        verify(noteService, times(1)).addOrder(order);
    }

    @Test
    void testDeleteOrder() {

        noteController.deleteOrderById(1);

        verify(noteService, times(1)).deleteOrderById(1);
    }
}