## Key-value pairs

YAML keeps data stored as a map containing keys and values associated with those keys. This map is in no particular order, so you can reorder it at will. Each pair is in the format KEY: VALUE. For example:

```yaml
min-tag: 'minecraft'
can-tag: 'cancelled'
```

Note the 'quotes' around the value. When the value is a text string, we use the quotes to make sure any special characters aren't given special meaning, and instead are all kept as part of the value. So even though they are optional, using them is highly recommended.

Other than text, numbers and true/false, the value associated to a key can also be another map of key-value pairs. To achieve this, omit the value and instead write the key-value pairs in the following lines. However, you must prefix them with at least one more SPACE character than the key.

YAML will consider that lines prefixed with more spaces than the parent key are contained inside it; Moreover, all lines must be prefixed with the same number of spaces to belong to the same map. So this works:

```yaml
formatting:
  fromgame:
    chat: '(%sender%) %message%'
    action: '* %sender% %message%'
```

This works too:


```yaml
formatting:
        from-game:
                chat: '(%sender%) %message%'
                action: '* %sender% %message%'
```

But this doesn't work:

```not-yaml
formatting:
from-game:
chat: '(%sender%) %message%'
action: '* %sender% %message%'
```

### Alternative format

YAML supports JSON syntax to store key-value maps, useful for compressing small maps into a single line. Syntax like : {KEY: VALUE, KEY: VALUE, ...} works. The above example would become:

```yaml
formatting: {from-game: {chat: '(%sender%) %message%', action: '* %sender% %message%'}}
