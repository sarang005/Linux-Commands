export const commands = [
  {
    category: "Communication Commands",
    id: "communication",
    commands: [
      {
        name: "dig",
        purpose: "Query DNS server",
        syntax: "dig [options] domain [query-type]",
        options: [
          {
            option: "@server",
            description: "Use specific DNS server",
            example: "dig @8.8.8.8 google.com",
          },
          {
            option: "MX",
            description: "Mail server records",
            example: "dig gmail.com MX",
          },
          {
            option: "+short",
            description: "Short output",
            example: "dig google.com +short",
          },
          {
            option: "-x",
            description: "Reverse lookup",
            example: "dig -x 8.8.8.8",
          },
        ],
        examples: [
          {
            title: "Basic DNS Lookup",
            command: "dig google.com",
          },
          {
            title: "Find Mail Servers",
            command: "dig gmail.com MX",
          },
        ],
      },
      {
        name: "ssh",
        purpose: "Securely connect to remote systems",
        syntax: "ssh [options] user@host",
        options: [
          {
            option: "-p",
            description: "Specify port",
            example: "ssh -p 2222 user@server",
          },
          {
            option: "-i",
            description: "Identity file",
            example: "ssh -i key.pem user@server",
          },
          {
            option: "-X",
            description: "Enable X11 forwarding",
            example: "ssh -X user@server",
          },
        ],
        examples: [
          {
            title: "Connect to Remote Server",
            command: "ssh user@192.168.1.10",
          },
          {
            title: "Run Command Remotely",
            command: 'ssh user@server "df -h"',
          },
        ],
      },
    ],
  },
  {
    category: "File Comparison Commands",
    id: "comparison",
    commands: [
      {
        name: "diff",
        purpose: "Compare files line by line",
        syntax: "diff [options] file1 file2",
        options: [
          {
            option: "-u",
            description: "Unified format",
            example: "diff -u old.c new.c",
          },
          {
            option: "-w",
            description: "Ignore whitespace",
            example: "diff -w file1 file2",
          },
          {
            option: "-r",
            description: "Recursive compare",
            example: "diff -r dir1 dir2",
          },
        ],
        examples: [
          {
            title: "Basic Compare",
            command: "diff file1.txt file2.txt",
          },
          {
            title: "Recursive Compare",
            command: "diff -r dir1 dir2",
          },
        ],
      },
    ],
  },
  {
    category: "File Management Commands",
    id: "management",
    commands: [
      {
        name: "ls",
        purpose: "List files and directories",
        syntax: "ls [options] [directory]",
        options: [
          {
            option: "-l",
            description: "Long listing",
            example: "ls -l",
          },
          {
            option: "-a",
            description: "Show hidden files",
            example: "ls -a",
          },
          {
            option: "-h",
            description: "Human readable sizes",
            example: "ls -lh",
          },
        ],
        examples: [
          {
            title: "Basic Listing",
            command: "ls",
          },
          {
            title: "Detailed Listing",
            command: "ls -lah",
          },
        ],
      },
      {
        name: "chmod",
        purpose: "Change file permissions",
        syntax: "chmod [options] mode file",
        notes: ["4 = Read", "2 = Write", "1 = Execute"],
        examples: [
          {
            title: "Full Permission",
            command: "chmod 777 script.sh",
          },
          {
            title: "Recursive Permission",
            command: "chmod -R 755 project/",
          },
        ],
      },
      {
        name: "rm",
        purpose: "Remove files and directories",
        syntax: "rm [options] file",
        options: [
          {
            option: "-r",
            description: "Recursive delete",
            example: "rm -r folder/",
          },
          {
            option: "-f",
            description: "Force deletion",
            example: "rm -f file.txt",
          },
        ],
        examples: [
          {
            title: "Delete File",
            command: "rm file.txt",
          },
          {
            title: "Delete Directory",
            command: "rm -rf project/",
          },
        ],
        warning:
          "Be careful with rm -rf. It permanently deletes files and directories.",
      },
    ],
  },
  {
    category: "Media Commands",
    id: "media",
    commands: [
      {
        name: "genisoimage",
        purpose: "Generate ISO image from a directory",
        syntax: "genisoimage [options] source_directory",
        options: [
          {
            option: "-o",
            description: "Output ISO file",
            example: "genisoimage -o backup.iso /data",
          },
          {
            option: "-V",
            description: "Volume label",
            example: "genisoimage -V MYDVD -o dvd.iso folder/",
          },
        ],
        examples: [
          {
            title: "Create ISO",
            command: "genisoimage -o backup.iso /data",
          },
        ],
      },
    ],
  },
];
