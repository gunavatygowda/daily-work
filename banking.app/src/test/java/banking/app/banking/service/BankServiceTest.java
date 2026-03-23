package banking.app.banking.service;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;

import banking.app.banking.exception.BankingException;


class BankServiceTest {

    private BankService bank;

    @BeforeEach
    void setup() {
        bank = new BankService();
        bank.createAccount(1, "Amit", 1000);
    }

    @Test
    void testWithdraw() {
        bank.withdraw(1, 300);
        assertEquals(700, bank.getAccount(1).getBalance());
    }
    @Test
    void testDeposit() {
        bank.deposit(1, 500);
        assertEquals(1500, bank.getAccount(1).getBalance());
    }
    @Test
    void testDuplicateAccount() {
        assertThrows(BankingException.class, () ->
                bank.createAccount(1, "Test", 500)
        );
    }
    @Test
    void testInsufficientBalance() {
        assertThrows(BankingException.class, () ->
                bank.withdraw(1, 2000)
        );
    }
    @Test
    void testAccountNotFound() {
        assertThrows(BankingException.class, () ->
                bank.getAccount(12345)
        );
    }
    @Test
    void testNegativeWithdraw() {
        assertThrows(BankingException.class, () ->
                bank.withdraw(1, -50)
        );
    }

}
