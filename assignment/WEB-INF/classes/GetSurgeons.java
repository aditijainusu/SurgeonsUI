import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

/**
 * GetSurgeons is a HTTP servlet serveing "GET request" with Surgeons data as response
 */
public class GetSurgeons extends HttpServlet
{
    public void doGet(HttpServletRequest request,HttpServletResponse response)
    {
        try
        {
            //Read the file
            ServletContext context  = getServletConfig().getServletContext();
            String filePath=context.getRealPath("")+"/assignment.json";
            File file=new File(filePath);
            String mimeType = context.getMimeType(filePath);
            // sets HTTP header and content details
            response.setHeader("Content-Disposition", "filename=\"" + file.getName() + "\"");
            response.setContentType(mimeType);
            response.setContentLength((int)file.length());

            byte[] byteBuffer = new byte[1024];
            DataInputStream inputStream= new DataInputStream(new FileInputStream(file));
            ServletOutputStream outputStream = response.getOutputStream();
            if(inputStream==null)
            {
                outputStream.write("[]".getBytes());
                return;
            }

            // reading the file's bytes and writing them to the response output stream
            int length = inputStream.read(byteBuffer);
            while (length!=-1)
            {
                outputStream.write(byteBuffer,0,length);
                length = inputStream.read(byteBuffer);
            }

            //cleanly closing the input and output streams
            inputStream.close();
            outputStream.close();

        }catch(Exception exception)
        {
            try
            {
                ServletOutputStream outputStream = response.getOutputStream();
                outputStream.write(exception.getMessage().getBytes());
            }catch(IOException ioException)
            {
                System.out.println("Exception e: "+exception);
            }
        }
    }
}