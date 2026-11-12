# SSH

Secure Shell Protocol (SSH) is the cryptographic handshake generally used to transfer files.

It is used as an alternative to just sending the code updates to a remote repository just via a normal channel thru HTTP/HTTPS standards, whichI believe don't encrypt the data, so someone can do a "man in the middle" attack. 

Generally, you probably aren't important enough for HTTPS vs SSH to really matter...

[docs.github - how to add ssh keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Essentially, all you do is add store a key on your computer to encrypt/decrypt your code when transferring it and there is a code on the remote server to do the same. So every time you transfer code/info, it will look like garbage until on a device where it can be unencrypted. 
