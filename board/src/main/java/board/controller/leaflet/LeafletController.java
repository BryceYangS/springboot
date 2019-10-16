package board.controller.leaflet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LeafletController {
	
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@RequestMapping("/leaflet/openLeaflet.do")
	public String openLeaflet() throws Exception{
		return "/leaflet/leafletTest";
	}
}
