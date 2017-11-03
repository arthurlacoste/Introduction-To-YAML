## Basic principles

* Always save using the UTF-8 encoding to minimize the possibility of errors.
* Never, EVER use the TAB character anywhere in it. This doesn't work.
* Editing with a WYSIWYG text processor, such as Microsoft Word, is not recommended.
* Use a monowidth/monospaced font to view the contents. Examples you may have in your computer: Fixedsys, Lucida Console, Consolas, Monaco, DejaVu Sans Mono, Courier New.

Whenever you see the **#** character anywhere in the file that isn't first enclosed in '' (quotes) or "" (double quotes), it marks the beginning of a **comment**. This means all the text after it, up until the end of the line, is _completely ignored_ and has no effect. You can use this to write notes on the file or temporarily disable one or more options.

These are all comments:

```yaml
#debug: false
#Hello there, how are you?
debug: false # <- The line is read up to this character!
```

This is not commented:

    
```yaml
name: '#changeme'
```

But this is:

```yaml
#name: '#changeme'
```