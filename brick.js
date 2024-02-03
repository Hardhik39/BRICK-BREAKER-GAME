class c_brick
            {
                constructor(l_x,l_y)
                    {
                        this.brick_X=l_x;
                        this.brick_Y=l_y;
                        this.brick_width=200;
						this.brick_height=40;
                        this.brick_color="rgba(248, 38, 10, 0.96)";
						
                        
						
						
                    }
                m_drawbrick(l_context)
                    {
                       l_context.fillStyle=this.brick_color;
                       l_context.fillRect(this.brick_X,this.brick_Y,this.brick_width,this.brick_height);
					   l_context.strokeRect(this.brick_X,this.brick_Y,this.brick_width,this.brick_height);
						
					
                        
                    }
				
				
			  
			}