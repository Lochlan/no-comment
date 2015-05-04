# no-comment

Remove C and C++ style comments from a file.

```JavaScript
/*
    C style multi-line block comment
*/

// C++ style single-line comment
```

## Usage

### JavaScript

```JavaScript
var noComment = require('no-comment');
var output = noComment('foo.txt');
console.log(output);
```

### Shell

```bash
no-comment source_file [target_file]
```

Note that output goes to stdout if `target_file` is omitted.
