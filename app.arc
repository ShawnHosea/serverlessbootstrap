@app
begin-app

@static
fingerprint false
folder public
ignore
  .js.map
  tiff
prune true
spa false


@http
get /
get /thanks