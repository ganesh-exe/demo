import React, { useState } from 'react'
import Card from './Card'

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id : 1,
      title: "Linux",
      author: "Rohan",
      date: "21 March 2020",
      category: "OS",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yp1vhA2f-rzMMLnqy5OlIgHaF9%26pid%3DApi&f=1",
      content: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. Distributions include the Linux kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word 'Linux' in their name, but the Free Software Foundation uses the name 'GNU/Linux' to emphasize the importance of GNU software, causing some controversy. Popular Linux distributions include Debian, Fedora Linux, and Ubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise.",
      likes: 125
    },
    {
      id : 2,
      title: "Windows",
      author: "Pruthvi",
      date: "21 June 2021",
      category: "OS",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2017%2F11%2F17%2F253983-Microsoft_Windows-Windows_8-operating_systems.jpg&f=1&nofb=1",
      content: "Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry. Active Microsoft Windows families include Windows NT and Windows IoT; these may encompass subfamilies,. Defunct Microsoft Windows families include Windows 9x, Windows Mobile and Windows Phone. Microsoft introduced an operating environment named Windows on November 20, 1985, as a graphical operating system shell for MS-DOS in response to the growing interest in graphical user interfaces. Microsoft Windows came to dominate the world's personal computer market with over 90% market share, overtaking Mac OS, which had been introduced in 1984.",
      likes: 56
    },
    {
      id : 3,
      title: "Macintosh OS",
      author: "Raman",
      date: "1 September 2020",
      category: "OS",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.idgesg.net%2Fimages%2Farticle%2F2019%2F08%2Fmac_os_logo-100809398-large.jpg&f=1&nofb=1",
      content: "The family of Macintosh operating systems developed by Apple Inc. includes the graphical user interface-based operating systems it has designed for use with its Macintosh series of personal computers since 1984, as well as the related system software it once created for compatible third-party systems. In 1984, Apple debuted the operating system that is now known as the Classic Mac OS with its release of the original Macintosh System Software. The system, rebranded Mac OS in 1996, was preinstalled on every Macintosh until 2002 and offered on Macintosh clones for a short time in the 1990s. Noted for its ease of use, it was also criticized for its lack of modern technologies compared to its competitors",
      likes: 97
    }
  ])

  return (
   <>
      <section class="py-4 ">
        <div class="container">
            <div class="row ">
              {blogs.map((el) => {
                return <Card details={el}/>
              })}
    
    </div>
        </div>
    </section>
   </>
  )}
export default Home