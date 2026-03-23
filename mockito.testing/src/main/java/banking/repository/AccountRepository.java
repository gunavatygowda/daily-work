package banking.repository;

import banking.account.Account;

public interface AccountRepository {
	  Account findById(int id);
	    void save(Account account);
	}