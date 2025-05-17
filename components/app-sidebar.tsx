import * as React from "react";
import { FlameIcon, GalleryVerticalEnd, HomeIcon, Minus, Plus, TrendingUpIcon } from "lucide-react";
import schizologoonly from "@/images/schizologoonly.jpg";
import schizologo from "@/images/schizologo.jpg"
import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getSubreddits } from "@/sanity/lib/subreddits/getSubreddits";
import CreateCommunityButton from "./header/CreateCommunityButton";

type SidebarData = {
  navMain:{
    title:string;
    url:string;
    items  :{
      title:string;
      url:string;
      isActive:boolean;
    }[];
  }[];
};

// This is sample data.

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const subreddits = await getSubreddits();
  // console.log(subreddits);

  const sidebarData = {
    navMain: [
      {
        title: "Communities",
        url: "#",
        items: subreddits?.map((subreddit) => ({
          title: subreddit.title || "random schizo",
          url: `/community/${subreddit.slug}`,
          isActive: false,
        })) || [],
      },
    ],
  };
  

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center">
                <Image src={schizologo} alt="logo" height="75" width="75" className="object-contain"/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>

          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  {/* Create Community Button */}
                  <CreateCommunityButton />
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="p-5">
                  <Link href ="/">
                    <HomeIcon className="w-4 h-4 mr-2" />
                      Home
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="p-5">
                  <Link href ="/">
                    <TrendingUpIcon className="w-4 h-4 mr-2" />
                      Trending
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild className="p-5">
                  <Link href ="/">
                    <FlameIcon className="w-4 h-4 mr-2" />
                      Hot/Controversial
                  </Link>
                </SidebarMenuButton>

              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>


        <SidebarGroup>
          <SidebarMenu>
            {sidebarData.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
