package com.eversun.server.service;

import com.eversun.server.model.Item;
import com.eversun.server.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public Iterable<Item> get() {
        return itemRepository.findAll();
    }

    public Item get(Integer id) {
        return itemRepository.findById(id).orElse(null);
    }

    public void remove(Integer id) {
        itemRepository.deleteById(id);
    }

    public Item add(String name, String category, Integer quantity) {
        Item item = new Item();
        item.setName(name);
        item.setCategory(category);
        item.setQuantity(quantity);
        itemRepository.save(item);
        return item;
    }

    public Item update(Integer id, String name, String category, Integer quantity) {
        Optional<Item> itemToUpdate = itemRepository.findById(id);
        Item existingItem = itemToUpdate.get();
        existingItem.setName(name);
        existingItem.setCategory(category);
        existingItem.setQuantity(quantity);
        itemRepository.save(existingItem);
        return existingItem;
    }

}