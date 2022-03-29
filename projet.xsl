<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:template match="/boutique">
        <html>
            <head>
                <title>LA BOUTIQUE SPORTIVE</title>
            </head>
            <body>
                <h2 align="center">Liste des articles</h2>
                <table border="1">
                    <tr bgcolor="blue" align="center">
                        <th>image</th>
                        <th>nom</th>
                        <th>marque</th>
                        <th>prix(euro)</th>
                        <th>promotion(euro)</th>
                        <th>couleurs</th>
                        <th>avis</th>
                    </tr>

                    <xsl:for-each select="rayon">
                        

                            <xsl:for-each select="categorie">

                                <xsl:for-each select="type">

                                    <xsl:for-each select="article">

                                      <tr align="center">
                                          <td>
                                              <xsl:value-of select="image"/>
                                          </td>
                                          <td>
                                              <xsl:value-of select="nom"/>
                                          </td>
                                          <td>
                                              <xsl:value-of select="marque"/>
                                          </td>
                                          <td>
                                              <xsl:value-of select="prix"/>
                                          </td>
                                          <td>
                                              <xsl:value-of select="promotion"/>
                                          </td>
                                          <td>
                                                  <xsl:for-each select="couleurs">
                                                      <xsl:value-of select="couleur"/>
                                                  </xsl:for-each>  
                                          </td>
                                          <td>
                                                  <xsl:for-each select="avis">
                                                      <xsl:value-of select="commentaire"/>
                                                  </xsl:for-each>
                                          </td>
                                      </tr>

                                    </xsl:for-each>

                                </xsl:for-each>

                            </xsl:for-each>

                        
                    </xsl:for-each>


                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
