const http = require('http')    //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req, res) => {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<h2>Cities I Would Like to Visit</h2>')
      res.write('<p>There are many cities around the world that I would like to visit. The following are some of the cities I hope to visit in the future.</p>')

      res.write('<table border="1">')
      res.write('<tr><th>City</th><th>Reason to Visit</th><th>Distance from Addis Ababa</th><th>Travel Cost</th></tr>')
      res.write('<tr><td>Paris</td><td>To see the Eiffel Tower</td><td>5,580 km</td><td>$1,300</td></tr>')
      res.write('<tr><td>Tokyo</td><td>To experience Japanese culture</td><td>10,450 km</td><td>$1,400</td></tr>')
      res.write('<tr><td>Dubai</td><td>To see the modern architecture</td><td>2,510 km</td><td>$1,000</td></tr>')
      res.write('<tr><td>Rome</td><td>To explore its history</td><td>4,480 km</td><td>$1,100</td></tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }
  )

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})