## Lists

There is one other data structure from YAML we need to use - The list. Lists are used to store a collection of ordered values. The values are not associated with a key, only with a positional index obtained from the order in which they are specified (item 1, item 2, etc.).

```yaml
mylist:
- 'item 1'
- 'item 2'
```

Like key-value pairs, list items are defined in the lines below the list key, all with the same number of spaces prefixing them (at least as many spaces as the parent key). The difference is that they begin with a dash (**-**). Here's another valid list:

```yaml
mylist:
- 100
- 200
```

Now, remember how you could put key-value maps inside key-value maps? You can do the same with lists. You can have:
* Map inside Map (as seen in the previous section)
* Lists inside maps (as seen immediately above - lists are, by default, inside maps, since they need a key)
* Maps inside lists

```yaml
channels:
  - name: '#mychannel'
    password: ''
  - name: '#myprivatechannel'
    password: 'mypassword'
```

* List inside List

```yaml
twobytwotable:
  - - 'a1'
    - 'a2'
  - - 'b1'
    - 'b2'
```

### Alternative format

Guess what, there's also a one-line format for lists! It is [ITEM1, ITEM2, ITEM3, ...]. Here's the above example:

```yaml
twobytwotable: [ ['a1', 'a2'], ['b1', 'b2'] ]
```

