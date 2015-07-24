# no-comment

Remove C and C++ style comments and any surrounding whitespace.

```JavaScript
/*
    C style multi-line block comment
*/

// C++ style single-line comment
```

Note that the regular expressions used here are fairly naive.

## Usage

### JavaScript

```JavaScript
var noComment = require('no-comment');
var fs = require('fs');
var output = noComment(fs.readFileSync('foo.txt').toString());
console.log(output);
```

### Shell

```bash
no-comment source_file [target_file]
```

Note that output goes to stdout if `target_file` is omitted.
