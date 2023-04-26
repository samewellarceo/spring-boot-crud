package com.eversun.server.controller;

import com.eversun.server.model.Item;
import com.eversun.server.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public Iterable<Item> get() {
        return itemService.get();
    }

    @GetMapping("/items/{id}")
    public Item get(@PathVariable Integer id) {
        Item item = itemService.get(id);
        if(item == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        return item;
    }

    @DeleteMapping("/items/{id}")
    public void delete(@PathVariable Integer id) {
        Item item = itemService.get(id);
        if(item == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        itemService.remove(id);
    }

    @PostMapping("/items")
    public Item create(@RequestBody @Valid Item item) {
        return itemService.add(item.getName(), item.getCategory(), item.getQuantity());
    }

    @PutMapping("/items/{id}")
    public Item updateItem(@RequestBody Item item, @PathVariable Integer id) {
        return itemService.update(id, item.getName(), item.getCategory(), item.getQuantity());
    }

}