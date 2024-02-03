class c_bar
            {
                constructor()
                    {
                        this.bar_X=750;
                        this.bar_Y=810;
                        this.bar_width=120;
						this.bar_height=10;
                        this.bar_color="rgba(7, 228, 247, 0.96)";
						this.movespeed=15;
						this.MoveLeft_flag=0;
						this.MoveRight_flag=0;
                        
                    }
                m_drawbar(l_context)
                    {
                       l_context.fillStyle=this.bar_color;
                       l_context.fillRect(this.bar_X,this.bar_Y,this.bar_width,this.bar_height);
				    }
				m_bar_canvas_collision(l_canvas)
				{
					if((this.bar_X+this.bar_width)>l_canvas.width)
                    {
                        this.bar_X = l_canvas.width - this.bar_width;
                
                
                    }
                    if(this.bar_X < 0)
                    {
                          this.bar_X = 0;
                
                    }
				}
				m_bar_move_button()
				{
                    if (this.MoveLeft_flag==1)
                     {
                       this.bar_X-=this.movespeed; 
                     }
                    if (this.MoveRight_flag==1)
                     {
                       this.bar_X+=this.movespeed; 
                     }
				}
				
			}