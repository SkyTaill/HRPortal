package ru.startup.hr.entities.users;

public enum Status {
    ACTIVE, NOT_ACTIVE, DELETED;

    private String name="Status";

    public String getName() {
        return name;
    }
}